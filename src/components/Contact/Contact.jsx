import React, {useContext} from 'react';
import bemCssModules from 'bem-css-modules'



import { default as ContactStyles} from './Contact.module.scss'

const style = bemCssModules(ContactStyles)

const Contact = () => {





  return ( 
    <section className={style()}>
      <h1 className={style('title')}>Kontakt</h1>
    </section>
   );
}
 
export default Contact;