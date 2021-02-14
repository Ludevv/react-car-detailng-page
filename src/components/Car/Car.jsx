import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules'

import { default as CarStyles} from './Car.module.scss'
import request from '../../helpers/request';
import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const style = bemCssModules(CarStyles)

const Car = ({ id, img, isUserContext = false, date, describle, title}) => {
  const {user, setUser } = useContext(StoreContext)
  const history = useHistory();


  const isUserLogged = Boolean(user);
  console.log(id)



//     const boxEvenStyle = {
//           display: "flex",
//           flexDirection: "column",
//           flexBasis: "40%",
//           backgroundImage: `url(${img})`,
// };



  if(id % 2 == 0) {
    return ( 
      <li>
      <article className={style()}>
        <div className={style('boxEven')}>
          <h3 className={style('titleEven')}>{title}</h3>
          <p className={style('dateEven')}>{`Data realizacji: ${date}`}</p>
          <p className={style('describleEven')}>{describle}</p>
        </div>
        <div style={{backgroundImage: `url(${img})`, borderRadius: '20px 20px 20px 0px'}} className={style('imageBoxEven') }>
         <div className={style('triangleEven')}></div>
        </div>
        
      </article>
      </li>
    );
  } else { 
    return ( 
      <li>
      <article className={style()}>
        <div style={{backgroundImage: `url(${img})`, borderRadius: '20px 20px 0px 20px'}} className={style('imageBoxOdd')}>
            <div className={style('triangleOdd')}></div>
        </div>
        <div className={style('boxOdd')}>
          <h3 className={style('titleOdd')}>{title}</h3>
          <p className={style('dateOdd')}>{`Data realizacji: ${date}`}</p>
          <p className={style('describleOdd')}>{describle}</p>
        </div>
 
        
      </article>
      </li>
    );
  }

}
 
export default Car;