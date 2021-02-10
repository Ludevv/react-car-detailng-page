import React from 'react';
import bemCssModules from 'bem-css-modules'
import { Link } from 'react-router-dom'

import { default as AsideMenuStyles} from './AdminMenu.module.scss';

const style = bemCssModules(AsideMenuStyles)

const AdminMenu = ({isUserLogged}) => ( 
      <li className={style()}>
        <Link className={style("link")} to="/manage-cars">dodaj realizację</Link>
      </li>
 )

 
export default AdminMenu;