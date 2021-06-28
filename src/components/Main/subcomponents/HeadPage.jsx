import React from 'react';
import bemCssModules from 'bem-css-modules'

import logo from '../../../Images/logo.png'
import mclaren from '../../../Images/mclaren.jpg'

import { default as HeadPageStyles} from './HeadPage.module.scss'

const style = bemCssModules(HeadPageStyles)

const HeadPage = () => {
  return ( 
    <>
      <div style={{backgroundImage: `url(${mclaren})`}}  className={style('box')}> 
        {/* <img src="https://i.ibb.co/wBmBWNz/mobile.jpg" alt="bgc" /> */}
      </div>
      <div style={{backgroundImage: `url(${logo})`}} className={style('box-image')}></div>
      <h2 className={style('sub-title')}>Skrzypczyński</h2>
      <h1 className={style('title')}>AUTOManufaktura</h1>
    </>
   );
}
 
export default HeadPage;