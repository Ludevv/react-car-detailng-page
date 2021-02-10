import React, {useContext} from 'react';
import bemCssModules from 'bem-css-modules'
import Car from '../Car/Car'


import { default as MainStyles} from './Main.module.scss'
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(MainStyles)

const Main = () => {

  const {cars} = useContext(StoreContext);


  const carsElements = cars.map(car => <Car key={car.id} {...car}/>)

  return ( 
    <section className={style()}>
      <h1 className={style('h1')}>GŁÓWNA KURWA</h1>
      <h2 className={style('title')}></h2>
      <ul className={style('list')}>
        {carsElements}
      </ul>
    </section>
   );
}
 
export default Main;