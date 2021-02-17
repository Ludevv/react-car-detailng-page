import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import bemCssModules from 'bem-css-modules'


import { default as FooterStyles} from './Footer.module.scss'

const style = bemCssModules(FooterStyles)

const list = [
    { name: "Strona główna", path: "/", exact: true },
    { name: "Realizacje", path: "/realizacje" },
    { name: "Cennik", path: "/cennik" },
    { name: "Kontakt", path: "/kontakt" },
  ];

const Footer = () => {
    const menu = list.map((item) => (
    <li key={item.name}>
        <NavLink to={item.path} exact={item.exact ? true : false}>
            {item.name}
        </NavLink>
     </li>
    ));

  return ( 
    <>
    <section className={style()}>
      <div className={style('page-map')}>
          <p>Mapa strony:</p>
          <ul>{menu}</ul>
      </div>

      <div className={style('media')}>
          <p>Media:</p>
          <a href="https://www.facebook.com/AUTOManufaktura"><i className="fab fa-facebook"><span>Facebook</span></i></a>
          <a href="https://www.instagram.com/automanufaktura_skrzypczynski/"><i className="fab fa-instagram"><span>Instagram</span></i></a>
      </div>

      <div className={style('contact')}>
        <h5 >Adres:</h5>
        <h6>ul. Kordeckiego 81A</h6>
        <h6 className="address">25-134 Kielce</h6>
        <h4>Numer telefonu: </h4>
        <h2><a href="tel:794088370">+48 794 088 370</a></h2>
      </div>

      <div className={style('logo')}>
        <div><img src="https://i.ibb.co/j68YLMY/logo-Footer.png" alt="logo"/></div>
        <span>AUTOManufaktura</span>
        <span>Skrzypczyński</span>
      </div>
    </section>
    <p className="rights">© 2021 AUTOManufaktura Skrzypczyński Wszystkie Prawa Zastrzeżone</p>
    </>
   );
}
 
export default Footer;