import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules'
import { Route, Switch, Redirect } from 'react-router-dom'
import Cars from '../Cars/Cars'
import UserCars from '../UserCars/UserCars'
import AdminPanel from '../AdminPanel/AdminPanel'

import { default as ContentStyles} from './Content.module.scss'
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(ContentStyles);

const Content = () => {
  const {user} = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === 1;


  return ( 
    <main className={style()}>
      <Switch>
        <Route exact path="/" render={()=> <Cars/>}/>
        {isUserLogged && <Route exact path="/my-cars" render={()=> <UserCars/>}/>}
        {isAdmin && <Route exact path="/manage-cars" render={()=> <AdminPanel/>}/>}
        <Redirect to="/"/>
      </Switch>
    </main>
   );
}
 
export default Content;