import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules'
import { NavLink } from "react-router-dom";

import { StoreContext} from '../../store/StoreProvider'

import { default as HeaderStyles } from './Header.module.scss'
import LoginForm from '../LoginForm/LoginForm';
import AdminMenu from './AdminMenu';

const style = bemCssModules(HeaderStyles)

const list = [
    { name: "strona główna", path: "/", exact: true },
    { name: "realizacje", path: "/realizacje" },
    { name: "cennik", path: "/cennik" },
    { name: "kontakt", path: "/kontakt" },
  ];

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const { user, setUser } = useContext(StoreContext);

    const adminMenuComponent = user?.accessLevel === 1 ? <AdminMenu/> : null

    const menu = list.map((item) => (
    <li key={item.name} className={style('item')}>
        <NavLink className={style('link')} to={item.path} exact={item.exact ? true : false}>
            {item.name}
        </NavLink>
     </li>
    ));

    const handleOnClose = () => setIsModalOpen(false);

    const handleOnClick = () => {
        if(Boolean(user)){
            setUser(null);
        } else {
            setIsModalOpen(true);
        }
    }


    const setProperlyLabel = Boolean(user) ? 'Wyloguj się' : 'Zaloguj się';

    return ( 
        <header className={style()}>
            <div className={style('logo-wrapper')}></div>
            {/* <div className={style('underline')}></div> */}
            <h1 className={style('title')}>AUTOManufaktura Skrzypczyński</h1>
            <ul className={style('list')}>{menu} {adminMenuComponent}</ul>
            {/* <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i> */}
            <button className={style('button')} onClick={handleOnClick}>{setProperlyLabel}</button>
            {isMobileMenu ?  <i  onClick={()=> setIsMobileMenu(!isMobileMenu)} className="fas fa-times"></i> : <i onClick={()=> setIsMobileMenu(!isMobileMenu)} className="fas fa-bars"></i>}
            
           

            {isMobileMenu ? (  <aside className={style('mobile-menu')}>
                <ul className={style('mobile-list')}>{menu} {adminMenuComponent}</ul>
                <button className={style('mobile-button')} onClick={handleOnClick}>{setProperlyLabel}</button>
            </aside>) : null}
          
            
            <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
        </header>
     );
}
 
export default Header;