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

  // const handleOnClick = async () => {
  //   try{
  //     const {data, status} = await request.patch(
  //       '/users',
  //     {
  //       login: user.login,
  //       carId: id,
  //     }
  //     );

  //   if(status === 202 ) {
  //     setUser(data.user);
  //     history.push('/my-cars')
  //   }
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }



  return ( 
    <li>
    <article className={style()}>
      <h3 className={style('title')}>{title}</h3>
      <img src={img} alt={title} className={style('image')}/>
      <p className={style('price')}>{`Data realizacji: ${date}`}</p>
      <p className={style('describle')}>{describle}</p>
      {/* <p className={style('authors')}>{`Autorzy: ${allAuthors}`}</p> */}
      {/* {shouldBeBuyButtonVisible && <button onClick={handleOnClick}>Zakup ten kurs</button>} */}
    </article>
    </li>
   );
}
 
export default Car;