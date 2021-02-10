import React, {useContext, useState} from 'react';
import request from '../../../helpers/request';
import bemCssModules from 'bem-css-modules'
import { StoreContext } from '../../../store/StoreProvider';
import CarPopup from './CarPopup';
import {default as CarDetailsStyles} from './CarDetails.module.scss'
const style = bemCssModules(CarDetailsStyles);

const CarDetails = (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const {setCars} = useContext(StoreContext)
  const {id, title } = props;

  const showPopup = () => setIsOpenPopup(true)

  const hidePopup = (event) => {
    if(event){
      event.preventDefault();
    }
    
    setIsOpenPopup(false);
  }

  const handleDeleteCar = async () => {
    try {
      const { status } = await request.delete(`/cars/${id}`)

      if(status === 200) {
        setCars(prev => prev.filter(car=> car.id !== id))
      }
    } catch (error) {
      console.warn(error)
    }

  }

  return ( 
    <>
    <details className={style()}>
      <summary className={style("item")}>{title}</summary>
      <button className={style("button")} onClick={showPopup}>Edytuj</button>
      <button className={style("button")} onClick={handleDeleteCar}>Usuń</button>
      <CarPopup hidePopup={hidePopup} isOpenPopup={isOpenPopup} {...props}/>
    </details>
    
    </>
   );
}
 
export default CarDetails;