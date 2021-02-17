import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules'
import { Route, Switch, Redirect } from 'react-router-dom'
import Cars from '../Cars/Cars'
import Main from '../Main/Main'
import Prices from '../Prices/Prices'
import Contact from '../Contact/Contact'
import ScrollToTop from './ScrollToTop'
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
      <ScrollToTop />
      <Switch>
        <Route exact path="/" render={()=> <Main/>}/>
        <Route exact path="/realizacje" render={()=> <Cars/>}/>
        <Route exact path="/cennik" render={()=> <Prices/>}/>
        <Route exact path="/kontakt" render={()=> <Contact/>}/>
        {isAdmin && <Route exact path="/manage-cars" render={()=> <AdminPanel/>}/>}
        <Redirect to="/"/>
      </Switch>
    </main>
   );
}
 
export default Content;