import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules'
import Car from '../Car/Car'

import {default as UserCarsStyles} from './UserCars.module.scss'
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(UserCarsStyles);

const UserCars = () => {
  const {user, cars} = useContext(StoreContext);

  const buyedCars = cars.filter(car => user.cars.includes(car.id)).map(car => <Car isUserContext={true} key={car.id}  {...car}/>)

  return ( 
    <section className={style()}>
      <h2 className={style('title')}>Twoje wykupione kursy:</h2>
      <ul className={style('list')}>
        {buyedCars}
      </ul>
    </section>
   );
}
 
export default UserCars;