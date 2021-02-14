import React from 'react';
import bemCssModules from 'bem-css-modules'

import { default as MediaStyles} from './Media.module.scss'

const style = bemCssModules(MediaStyles)

const Media = () => {
  return ( 
    <div className={style()}>
      <div className={style('facebook')}>
        <a href="https://www.facebook.com/AUTOManufaktura">
          <i className="fab fa-facebook"></i>
        </a>
      </div>

      <div className={style('instagram')}>
        <a href="https://www.instagram.com/automanufaktura_skrzypczynski/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
   );
}
 
export default Media;