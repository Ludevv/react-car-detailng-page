import React, {useContext, useState} from 'react';
import bemCssModules from 'bem-css-modules'
import PriceList from './subcomponents/PriceList'

import { default as PricesStyles} from './Prices.module.scss'

const style = bemCssModules(PricesStyles)

const texts = ["myjna ręczna", "powłoki zabezpieczające", "renowacja lakieru", "woski","pielęgnacja i zabezpieczenie wnętrza"];


const Prices = () => {
  const [handWash, setHandWash] = useState(false);
  const [protectiveCoating, setProtectiveCoating] = useState(false);
  const [paintRestoration, setPaintRestoration] = useState(false);
  const [wax, setWax] = useState(false);
  const [interior, setInterior] = useState(false);

  const handleClick = (id) => {
    switch (id) {
      case '1': setHandWash(!handWash)
      break;
      case '2': setProtectiveCoating(!protectiveCoating)
      break;
      case '3': setPaintRestoration(!paintRestoration)
      break;
      case '4': setWax(!wax)
      break;
      case '5': setInterior(!interior)
      break;
    }
  }

  return ( 
    <section className={style()}>
      <h4 className={style('title')}>Cennik</h4>

      <PriceList id={"1"} value={handWash} text={"myjna ręczna"} click={handleClick}/>
      {handWash ? <section className={style('show-box')}>myje rodadasd</section> : null}
      <PriceList id={"2"} value={protectiveCoating} text={"powłoki zabezpieczające"} click={handleClick}/>
      {protectiveCoating ? <section className={style('show-box')}>pwoloki rodadasd</section> : null}
      <PriceList id={"3"} value={paintRestoration} text={"renowacja lakieru"} click={handleClick}/>
      {paintRestoration ? <section className={style('show-box')}>ren rodadasd</section> : null}
      <PriceList id={"4"} value={wax} text={"woski"} click={handleClick}/>
      {wax ? <section className={style('show-box')}>woskss rodadasd</section> : null}
      <PriceList id={"5"} value={interior} text={"pielęgnacja i zabezpieczenie wnętrza"} click={handleClick}/>
      {interior ? <section className={style('show-box')}>XXXsrodek rodadasd</section> : null}

     
    </section>
   );
}
 
export default Prices;