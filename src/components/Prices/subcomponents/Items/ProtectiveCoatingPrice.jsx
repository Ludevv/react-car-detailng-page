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
    name: "Ceramic Pro Strong (4 warstwy 9H + 1 warstwa Light)",
    time: "8h",
    price: "2490zł",
  },
  {
    name: "Ceramic Pro Light (2 warstwy powłoki ceramicznej)",
    time: "6h",
    price: "1100zł",
  },
]

const ProtectiveCoatingPrice = () => {
    const list = prices.map(price => (<GenerateList key={price.name} name={price.name} time={price.time} price={price.price}/>))

  return ( 
    <section className={style()}>
      {list}

        <ul className={style('star')}>
          <p>Właściwości:</p>
          <li>Utrzymuje się do 24 miesięcy,</li>
          <li>Łatwy w utrzymaniu,</li>
          <li>Nadaje piękny i trwały połysk,</li>
          <li>Odpycha wodę i brud,</li>
          <li>Odporny na chemię do mycia,</li>
          <li>Chroni przed promieniami UV.</li>
        </ul>

    </section> 
   );
}
 
export default ProtectiveCoatingPrice;