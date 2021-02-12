import React from 'react';
import bemCssModules from 'bem-css-modules'
import GenerateList from './GenerateList'

import { default as showBox} from './showBox.module.scss'

const style = bemCssModules(showBox)

const prices = [
  {
    name: "Usługa:",
    time: "Czas:",
    price: "Cena:",
  },
  {
    name: "Aplikacja wosku klasy PREMIUM (m.in. Collinite 476s, Finish Kare High Temp)",
    time: "3h",
    price: "150zł",
  },
  {
    name: "Aplikacja wosku klasy EXCLUSIVE (Fusso Coat,Zymöl Carbon, Zymöl Glasur)",
    time: "3h",
    price: "250zł",
  },

]

const WaxPrice = () => {
    const list = prices.map(price => (<GenerateList key={price.name} name={price.name} time={price.time} price={price.price}/>))

  return ( 
    <section className={style()}>
      {list}

        <ul className={style('star')}>
          <p>Pakiety obejmują:</p>
          <li>Mycie samochodu profesjonalnym szamponem,</li>
          <li>Czyszczenie i odtłuszczanie karoserii i felg,</li>
          <li>Dressing na opony,</li>
          <li>Ręczna aplikacja wosku</li>
          <li>Polerowanie mikrofibrą,</li>
          <li>Czyszczenie szyb z zewnątrz.</li>
        </ul>

    </section> 
   );
}
 
export default WaxPrice;