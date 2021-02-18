import React, {useContext} from 'react';
import bemCssModules from 'bem-css-modules'



import { default as ContactStyles} from './Contact.module.scss'

const style = bemCssModules(ContactStyles)

const Contact = () => {



useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return ( 
    <div className={style()}>
      <div className={style('box')}>
          <h5>Kontakt</h5>
          <h1>AUTOManufaktura Skrzypczyński. Przydomowa pracowania artystyczna o charakterze motoryzacyjnym</h1>
          <h4>Adres: </h4>
          <h6>ul. Kordeckiego 81A</h6>
          <h6>25-134 Kielce</h6>
          <h4>Numer telefonu: </h4>
          <h2><a href="tel:794088370">+48 794 088 370</a></h2>
          <a href="https://www.facebook.com/AUTOManufaktura"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/automanufaktura_skrzypczynski/"><i className="fab fa-instagram"></i></a>
          
          
      </div>
      
      
    </div>
   );
}
 
export default Contact;