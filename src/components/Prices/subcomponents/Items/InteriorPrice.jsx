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
    name: "Czyszczenie wnętrza (odkurzanie + mycie szyb + czyszczenie plastików)",
    time: "1.5h",
    price: "50zł",
  },
  {
    name: "Pranie tapicerki (odkurzanie + mycie szyb + czyszczenie kokpitu + plastików)",
    time: "3h",
    price: "250zł",
  },
  {
    name: "Czyszczenie tapicerki skórzanej + konserwacja mleczkiem ",
    time: "4h",
    price: "270zł",
  },
  {
    name: "Pranie dywaników (komplet)",
    time: "0.5h",
    price: "10zł",
  },
  {
    name: "Czyszczenie podsufitki oraz słupków",
    time: "1h",
    price: "40zł",
  },
]

const InteriorPrice = () => {
    const list = prices.map(price => (<GenerateList key={price.name} name={price.name} time={price.time} price={price.price}/>))

  return ( 
    <section className={style()}>
      {list}
        <ul className={style('star')}>
          <p>Pakiety obejmują:</p>
          <li>Kompleksowe odkurzanie wnętrza,</li>
          <li>Czyszczenie pędzelkami plastików</li>
          <li>Oczyszczenie podsufitki,</li>
          <li>Pranie foteli,</li>
          <li>Czyszczenie deski rozdzielczej i plastików wewnątrz,</li>
          <li>Czyszczenie deski rozdzielczej i plastików wewnątrz,</li>
          <li>Czyszczenie deski rozdzielczej i plastików wewnątrz,</li>
          <li>Mycie szyb zarówno wewnątrz, jak i na zewnątrz.</li>
        
        </ul>
    </section> 
   );
}
 
export default InteriorPrice;