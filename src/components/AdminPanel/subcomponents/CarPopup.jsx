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
  img = '',
  describle = '',
  date = new Date().toISOString().slice(0, 10),
  title = '',
}) => {
  const [formDescrible, setFormDescrible] = useState(describle);
  const [formImg, setFormImg] = useState(img);
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
      img: formImg,
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

  // const addAuthor = (event) => {
  //   event.preventDefault();

  //   setFromAuthors(prev => [...prev, formAuthor])
  //   setFormAuthor('') // BŁĄD????????????
  // }

  // const deleteAuthor = event => {
  //   const authorToDelete = event.target.dataset.author;
  //   setFromAuthors(prev => prev.filter(author => author !== authorToDelete))
  // }

  // const authorsElements = formAuthors.map(author => (
  //   <li key={author}>
  //     <p>{author}</p>
  //     <button data-author={author} onClick={deleteAuthor}>Usuń</button>
  //   </li>
  // ))



  const correctLabel = isEditMode ? 'Aktualizuj kurs' : 'Utwórz kurs'

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
              {/* <button onClick={addAuthor}>Dodaj autora</button> */}
            </label>
          </div>

          <button className={style('button')}  type="submit">{correctLabel}</button>
          <button className={style('button')} onClick={hidePopup} type="button">Anuluj</button>
        </form>
      </div>
    </Modal>
   );
}
 
export default CarPopup;