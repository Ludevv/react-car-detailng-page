import React, {useContext} from 'react';
import bemCssModules from 'bem-css-modules'



import { default as PricesStyles} from './Prices.module.scss'

const style = bemCssModules(PricesStyles)

const Prices = () => {





  return ( 
    <section className={style()}>
      <h1 className={style('title')}>Cennik</h1>
    </section>
   );
}
 
export default Prices;