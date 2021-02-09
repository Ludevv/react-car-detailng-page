import React, {useContext, useState} from 'react';
import request from '../../../helpers/request';
import { StoreContext } from '../../../store/StoreProvider';
import CarPopup from './CarPopup';

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
    <details>
      <summary>{title}</summary>
      <button onClick={showPopup}>Edytuj</button>
      <button onClick={handleDeleteCar}>Usuń</button>
      <CarPopup hidePopup={hidePopup} isOpenPopup={isOpenPopup} {...props}/>
    </details>
   );
}
 
export default CarDetails;