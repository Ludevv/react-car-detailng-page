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
    name: "Jednoetapowa renowacja lakieru – usunięcie zarysowań w ok. 50%",
    time: "5h",
    price: "1000zł",
  },
  {
    name: "Pełna renowacja lakieru – usunięcie zarysowań w ok. 80-100%",
    time: "9h",
    price: "1600zł",
  },

]

const PaintRestorationPrice = () => {
    const list = prices.map(price => (<GenerateList key={price.name} name={price.name} time={price.time} price={price.price}/>))

  return ( 
    <section className={style()}>
      {list}

        <ul className={style('star')}>
          <p>Pakiety obejmują:</p>
          <li>Mycie samochodu profesjonalnym szamponem,</li>
          <li>Dekontaminacja lakieru,</li>
          <li>Odtłuszczanie karoserii i felg,</li>
          <li>Renowacja lakieru usuwająca większość rys,</li>
          <li>Delikatne mycie samochodu,</li>
          <li>Dressing na opony,</li>
          <li>Czyszczenie szyb zewnątrz i wewnątrz.</li>
        </ul>

    </section> 
   );
}
 
export default PaintRestorationPrice;