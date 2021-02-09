import React, {useContext} from 'react';
import bemCssModules from 'bem-css-modules'
import Car from '../Car/Car'



import { default as CarsStyles} from './Cars.module.scss'
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(CarsStyles)

const Cars = () => {

  const {cars} = useContext(StoreContext);


  const carsElements = cars.map(car => <Car key={car.id} {...car}/>)

  return ( 
    <section className={style()}>
      <h2 className={style('title')}></h2>
      <ul className={style('list')}>
        {carsElements}
      </ul>
    </section>
   );
}
 
export default Cars;