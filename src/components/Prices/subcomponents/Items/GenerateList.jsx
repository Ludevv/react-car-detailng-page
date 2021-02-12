import React from 'react';
import bemCssModules from 'bem-css-modules'

import { default as GenerateListStyles} from './GenerateList.module.scss'

const style = bemCssModules(GenerateListStyles)


const GenerateList = (props) => {
  const {name, time, price} = props
  return ( 
    <>
    <div className={style()}>
        <span className={style('name')}>{name}</span>
        <span className={style('time')}>{time}</span>
        <span className={style('price')}>{price}</span>
    </div>
    {name === "Usługa:" ? <hr/> : null}
    </>
   );
}
 
export default GenerateList;