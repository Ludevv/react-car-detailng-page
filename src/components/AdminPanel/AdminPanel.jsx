import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules'
import { StoreContext } from '../../store/StoreProvider';
import CarPopup from './subcomponents/CarPopup';
import CarDetails from './subcomponents/CarDetails'
import {default as AdminPanelStyles} from './AdminPanel.module.scss'
const style = bemCssModules(AdminPanelStyles);

const AdminPanel = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const { cars } = useContext(StoreContext);

  const showPopup = () => setIsOpenPopup(true)
  const hidePopup = (event) => {
    if (event){
      event.preventDefault();
    }
    setIsOpenPopup(false);
  }

  const carsElements = cars.map(car => <CarDetails key={car.id} {...car}/>);


  return ( 
    <section  className={style()}>
      {carsElements}
      <hr className={style('line')}/>
      <button className={style('button')} onClick={showPopup}>Dodaj nowe auto</button>
      <CarPopup isEditMode={false} isOpenPopup={isOpenPopup} hidePopup={hidePopup}/>
    </section>
   );
}
 
export default AdminPanel;