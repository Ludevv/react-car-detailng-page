import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { default as CarStyles} from './Car.module.scss'
import request from '../../helpers/request';
import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const style = bemCssModules(CarStyles)

const Car = ({ id, imgs, isUserContext = false, date, describle, title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const {user, setUser } = useContext(StoreContext)
  const history = useHistory();

  const isUserLogged = Boolean(user);

  if(id % 2 == 0) {
    return ( 
      <li>
      <article className={style()}>
        <div className={style('boxEven')}>
          <h3 className={style('titleEven')}>{title}</h3>
          
          <p className={style('describleEven')}>{describle}</p>
          <p className={style('dateEven')}>{`Data realizacji: ${date}`}</p>
        </div>
        <div  style={{backgroundImage: `url(${imgs[0]})`, borderRadius: '20px 20px 20px 0px'}} className={style('imageBoxEven') }>
          <div onClick={() => setIsOpen(true)} className={style('hover')}></div>
         <div className={style('triangleEven')}></div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={imgs[photoIndex]}
            nextSrc={imgs[(photoIndex + 1) % imgs.length]}
            prevSrc={imgs[(photoIndex + imgs.length - 1) % imgs.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + imgs.length - 1) % imgs.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imgs.length)}
          />
        )}
        
      </article>
      </li>
    );
  } else { 
    return ( 
      <li>
      <article className={style()}>
        <div style={{backgroundImage: `url(${imgs[0]})`, borderRadius: '20px 20px 0px 20px'}} className={style('imageBoxOdd')}>
          <div  onClick={() => setIsOpen(true)} className={style('hover')}></div>
            <div className={style('triangleOdd')}></div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={imgs[photoIndex]}
            nextSrc={imgs[(photoIndex + 1) % imgs.length]}
            prevSrc={imgs[(photoIndex + imgs.length - 1) % imgs.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + imgs.length - 1) % imgs.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imgs.length)}
          />
        )}

        <div className={style('boxOdd')}>
          <h3 className={style('titleOdd')}>{title}</h3>
          <p className={style('describleOdd')}>{describle}</p>
          <p className={style('dateOdd')}>{`Data realizacji: ${date}`}</p>
        </div>
      </article>
      </li>
    );
  }
}
 
export default Car;