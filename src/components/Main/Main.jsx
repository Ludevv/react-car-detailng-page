import React, {useContext} from 'react';
import bemCssModules from 'bem-css-modules'
import Car from '../Car/Car'
import Contact from '../Contact/Contact'
import Prices from '../Prices/Prices'


import { default as MainStyles} from './Main.module.scss'
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(MainStyles)

const Main = () => {

  const {cars} = useContext(StoreContext);


  const carsElements = cars.map(car => <Car key={car.id} {...car}/>)

  return ( 
    <section className={style()}>
      <div className={style('box')}> </div>
      <div className={style('box-image')}></div>
      <h2 className={style('sub-title')}>Skrzypczyński</h2>
      <h1 className={style('title')}>AUTOManufaktura</h1>
  
      <h3 className={style('our-cars')}>realizacje</h3>
      <ul className={style('list')}>
        {carsElements}
      </ul>
      {/* <Prices/>
      <h3 className={style('find-us')}>kontakt</h3>
      <Contact/> */}
    </section>
   );
}
 
export default Main;