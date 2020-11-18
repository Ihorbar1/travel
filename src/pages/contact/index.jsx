import React from 'react';
import langCheaker from '../../helpers/languages/langChanges'
import s from './styles.module.css'
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import Footer from '../../components/footer/index'
import mapImg from '../../assets/img/map2.png'


export default class extends React.Component {

   changeHead = (lang) => this.setState({ lang: lang })

   render() {

      let lang = localStorage.getItem('lang');
      let langObj = langCheaker(lang);
      return (
         <>
            <Header changeHead={this.changeHead} />
            <Main text={langObj.contactHeader} />
            <div className={s.form}>
               <h2>{langObj.contactFormHeader}</h2>
               <p>{langObj.formName}</p>
               <input type="text" />
               <p>{langObj.formPhone}</p>
               <input type="tel" />
               <p>{langObj.formEmail}</p>
               <input type="mail" />
               <p>{langObj.formQuestion}</p>
               <textarea name="" id="" cols="30" rows="2" ></textarea>
               <div className={s.submit}>{langObj.formSend}</div>
            </div>

            <div className={s.contact}>
               <div className={s.map}>
                  <img src={mapImg} alt="" />
               </div>
               <div className={s.info}>
                  <h3>{langObj.mapHeader}</h3>
                  <div className={s.wrap}>

                     <p>{langObj.mapPhone}</p>
                     <p>{langObj.mapEmail}</p>
                     <p>{langObj.mapAddress}</p>
                  </div>
                  <a href="https://www.google.com.ua/maps/place/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B2%D0%B8%D1%86%D0%BA%D0%B8%D0%B9+%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%BE-%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE+%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%BE-%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0/@48.2923632,25.9347396,19.46z/data=!4m12!1m6!3m5!1s0x47340922ae043887:0x5f0fa7b1fb1a14cd!2z0JLQtdGB0YIg0JHRg9C60L7QstC40L3QsCwg0KLQntCS!8m2!3d48.2734108!4d25.9903485!3m4!1s0x0:0x5274b467cd2b5d2!8m2!3d48.292392!4d25.934715!5m1!1e1?hl=ru"
                     rel="noopener noreferrer" target="_blank">{langObj.mapButton}
                  </a>
               </div>
            </div>
            <Footer />
         </>
      )
   }
}