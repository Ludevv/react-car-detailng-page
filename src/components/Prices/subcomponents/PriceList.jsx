import React, {useContext} from 'react';
import bemCssModules from 'bem-css-modules'



import { default as PriceListStyles} from './PriceList.module.scss'

const style = bemCssModules(PriceListStyles)

const PriceList = (props) => {
  const {click, id, text, value} = props;
  return ( 
      <div onClick={()=>click(id)} className={style('hand-wash')}>
        <span>{text}</span>{value ? <i className="fas fa-chevron-circle-up"></i> : <i className="fas fa-chevron-circle-down"></i> }
      </div>
   );
}
 
export default PriceList;