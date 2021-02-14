import React from 'react';
import bemCssModules from 'bem-css-modules'

import { default as HeadPageStyles} from './HeadPage.module.scss'

const style = bemCssModules(HeadPageStyles)

const HeadPage = () => {
  return ( 
    <>
      <div className={style('box')}> </div>
      <div className={style('box-image')}></div>
      <h2 className={style('sub-title')}>Skrzypczyński</h2>
      <h1 className={style('title')}>AUTOManufaktura</h1>
    </>
   );
}
 
export default HeadPage;