import React, {useContext, useEffect} from 'react';
import bemCssModules from 'bem-css-modules'
import Car from '../Car/Car'
import HeadPage from './subcomponents/HeadPage'
import AboutUs from './subcomponents/AboutUs'


import { default as MainStyles} from './Main.module.scss'
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(MainStyles)

const Main = () => {

  const {cars} = useContext(StoreContext);


  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const carsElements = cars.map(car => <Car key={car.id} {...car}/>)

  return ( 
    <section className={style()}>
      <HeadPage/>
      <AboutUs/>

  
      {/* <h3 className={style('our-cars')}>realizacje</h3> */}
      {/* <ul className={style('list')}>
        {carsElements}
      </ul> */}
      {/* <Prices/>
      <h3 className={style('find-us')}>kontakt</h3>
      <Contact/> */}
    </section>
   );
}
 
export default Main;