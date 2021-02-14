import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules'
import Modal from '../../Modal/Modal'

import {default as CarPopupStyles} from './CarPopup.module.scss'
import { StoreContext } from '../../../store/StoreProvider';
import request from '../../../helpers/request';

const style = bemCssModules(CarPopupStyles);

const CarPopup = ({
  hidePopup,
  isEditMode = true,
  isOpenPopup,
  id,
  imgs = [],
  describle = '',
  date = new Date().toISOString().slice(0, 10),
  title = '',
}) => {
  const [formDescrible, setFormDescrible] = useState(describle);
  const [formImgs, setFormImgs] = useState(imgs);
  const [formImg, setFormImg] = useState('');
  const [formDate, setFormDate] = useState(date);
  const [formTitle, setFormTitle] = useState(title);

  const {setCars} = useContext(StoreContext);

  const handleOnChagneDescrible = e => setFormDescrible(e.target.value);
  const handleOnChagneImg = e => setFormImg(e.target.value);
  const handleOnChagneDate = e => setFormDate(e.target.value);
  const handleOnChagneTitle = e => setFormTitle(e.target.value);
  
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const carObject = {
      describle: formDescrible,
      id,
      imgs: formImgs,
      date: formDate,
      title: formTitle,
    };

    if(isEditMode){
      carObject.id = id;

      const { data , status} = await request.put('/cars', carObject);


      if(status===202){
        setCars(data.cars);
      }
    } else {
      const { data , status } = await request.post('/cars', carObject)

      if(status === 201 ){
        setCars(data.cars)
      }
    }

    hidePopup();
  }

  const addImg = (event) => {
    event.preventDefault();

    setFormImgs(prev => [...prev, formImg])
    setFormImg('') // BŁĄD????????????
  }

  const deleteImg = event => {
    const imgToDelete = event.target.dataset.img;
    setFromImgs(prev => prev.filter(img => img !== imgToDelete))
  }

  const imgsElements = formImgs.map(img => (
    <li key={img}>
      <p>{img}</p>
      <button data-img={img} onClick={deleteImg}>Usuń</button>
    </li>
  ))



  const correctLabel = isEditMode ? 'Aktualizuj auto' : 'Utwórz auto'

  return ( 
    <Modal handleOnClose={hidePopup} isOpen={isOpenPopup}>
      <div className={style()}>
        <form className={style('form')} method="submit" onSubmit={handleOnSubmit}>
        <div className={style('form-row')}>
          <label>
              Tytuł:
              <input 
              className={style('input')} 
              type="text" 
              value={formTitle}
              onChange={handleOnChagneTitle}
              />
            </label>
          </div>
          <div className={style('form-row')}>
          <label>
              Źródło obrazka:
              <input 
              className={style('input')} 
              type="text" 
              value={formImg}
              onChange={handleOnChagneImg}
              />
              <button onClick={addImg}>Dodaj zdjęcie</button>
            </label>
          </div>
          <div className={style('form-row')}>
          <label>
              Data:
              <input 
              className={style('input')} 
              type="date" 
              value={formDate}
              onChange={handleOnChagneDate}
              />
            </label>
          </div>
          <div className={style('form-row')}>
            <label>
              Opis:
              <textarea 
              className={style('inputDescrible')} 
              type="text" 
              value={formDescrible}
              onChange={handleOnChagneDescrible}
              />
              
            </label>
          </div>

          <button className={style('button')}  type="submit">{correctLabel}</button>
          <button className={style('button')} onClick={hidePopup} type="button">Anuluj</button>
        </form>
        <p>Lista zdjęć:</p>
        <ul>
          {imgsElements}
        </ul>
      </div>
    </Modal>
   );
}
 
export default CarPopup;