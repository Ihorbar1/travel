import React from 'react';
import langCheaker from '../../helpers/languages/langChanges'
import s from './styles.module.css'
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import Footer from '../../components/footer/index'
import mapImg from '../../assets/img/map.png'


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
                  <a href="https://www.google.com.ua/maps/place/%D0%92%D0%B5%D1%81%D1%82+%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0,+%D0%A2%D0%9E%D0%92/@48.273952,25.9902017,18.17z/data=!4m5!3m4!1s0x47340922ae043887:0x5f0fa7b1fb1a14cd!8m2!3d48.2734108!4d25.9903485!5m1!1e1?hl=ru"
                     rel="noopener noreferrer" target="_blank">{langObj.mapButton}
                  </a>
               </div>
            </div>
            <Footer />
         </>
      )
   }
}