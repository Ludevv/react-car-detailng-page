import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AboutUsStyles} from './AboutUs.module.scss'


const style = bemCssModules(AboutUsStyles)

const AboutUs = () => {
  return ( 
    <section className={style()}>

      <div className={style('box-wrap')}>
        <section className={style('box')}>
          <i className="fas fa-car"></i>
          <p className={style('header')}>przygotujemy do sprzedaży</p>
          <p className={style('describle')}>Usuwamy drobne uszkodzenia, które podnoszą wartość pojazdu.</p>
        </section>
        <section className={style('box')}>
          <i className="fas fa-broom"></i>
          <p className={style('header')}>zadbamy o każdy szczegół</p>
          <p className={style('describle')}>Przyjedź i sam przekonaj się o naszym doświadczeniu i umiejętnościach.</p>
        </section>

        <section className={style('box')}>
          <i className="fas fa-hand-sparkles"></i>
          <p className={style('header')}>odświeżymy twoje auto</p>
          <p className={style('describle')}>Dzięki naszym zabiegom twój samochód odzyska drugą młodość.</p>
        </section>
      </div>

      <div className={style('content')}>
        <div className={style('triangle')}></div>
        <article className={style('row')}><p className={style('header')}>detailing studio</p>Zadbane i&nbsp;lśniące auto to&nbsp;najlepsza wizytówka każdego kierowcy. AUTOManufaktura Skrzypczyński to&nbsp;w&nbsp;pełni bezpieczna, profesjonalna pracownia artystyczna w&nbsp;której Twoje auto odzyska dawny blask. Zadbamy by&nbsp;Twoje auto wyjechało z&nbsp;naszego studia takie jakie sobie wymarzyłeś! Ręczne mycie to&nbsp;większa precyzja i&nbsp;bezpieczeństwo dla lakieru. Korzystamy tylko i&nbsp;wyłącznie z&nbsp;profesjonalnego sprzętu i&nbsp;preparatów najlepszych producentów. Dbamy o&nbsp;każdy szczegół!</article>
        <div className={style('row')}>
          <article className={style('column-first')}><p className={style('header')}>o firmie</p>AUTOManufaktura Skrzypczyński to&nbsp;dużo więcej, niż tylko pielęgnacja samochodu. Oprócz kompleksowej pielęgnacji aut zajmujemy się odnową i&nbsp;utrwaleniem lakieru. Usuwamy uszkodzenia i&nbsp;zarysowania karoserii, poprawiamy jakość wizualną felg i&nbsp;opon.</article>
          <article><p className={style('header')}>dlaczego my?</p>Dlaczego warto powierzyć swój samochochód właśnie nam? Samochody to&nbsp;nasza pasja. Znamy dokładnie potrzeby naszych Klientów a&nbsp;nasze doświadczenie i&nbsp;wiedza zdobyta na&nbsp;temat auto detailingu sprawia, że&nbsp;Twoje auto będzie wyglądać jak z&nbsp;salonu!</article>
        </div>
      </div>
    </section>
   );
}
 
export default AboutUs;