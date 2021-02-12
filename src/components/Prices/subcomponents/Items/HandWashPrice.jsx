import React from 'react';
import bemCssModules from 'bem-css-modules'
import GenerateList from './GenerateList'

import { default as showBox} from './showBox.module.scss'

const prices = [
  {
    name: "Usługa:",
    time: "Czas:",
    price: "Cena:",
  },
  {
    name: "Mycie* + suszenie + naczernienie opon",
    time: "1.5h",
    price: "100zł",
  },
  {
    name: "Mycie* + suszenie + twardy wosk",
    time: "2h",
    price: "140zł",
  },
  {
    name: "Komplet (Mycie* + suszenie + naczernienie opon + czyszczenie wnętrza)",
    time: "2.5h",
    price: "100zł",
  },
  {
    name: "Dekontaminacja lakieru oraz glinkowanie (Usuwanie lotnej rdzy, smoły, asfaltu)",
    time: "2.5h",
    price: "200zł",
  },
  {
    name: "Nabłyszczanie opon",
    time: "0.5h",
    price: "20zł",
  },
]

const style = bemCssModules(showBox)

const HandWashPrice = () => {

    const list = prices.map(price => (<GenerateList key={price.name} name={price.name} time={price.time} price={price.price}/>))

  return ( 
    <section className={style()}>
      {list}

        <ul className={style('star')}>
          <p>*Mycie obejmuje:</p>
          <li>Mycie wstępne aktywną pianą o neutralnym pH,</li>
          <li>Usunięcie zabrudzeń organicznych,</li>
          <li>Bezpieczne mycie felg,</li>
          <li>Bezpieczne osuszenie karoserii ręcznikiem z mikrofibry i sprężonym powietrzem.</li>
        </ul>

    </section> 
   );
}
 
export default HandWashPrice;






