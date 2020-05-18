import React from 'react';
import ReactDOM from "react-dom";
import s from './styles.module.css'
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import Footer from '../../components/footer/index'
import mapImg from './map.png'


export default class extends React.Component {

   test = (lang) => {
      this.setState({ lang: lang })
   }
   render() {
      return (
         <>
            <Header changeHead={this.test} />
            <Main />
            <div className={s.form}>
               <h2>Форма зворотнього звязку</h2>
               <input type="text" placeholder="Імя" />
               <input type="text" placeholder="Контактний телефон" />
               <input type="text" placeholder="Електронна пошта" />
               <textarea name="" id="" cols="30" rows="2" placeholder="Запитання"></textarea>
            </div>

            <div className={s.contact}>
               <div className={s.map}>
                  <img src={mapImg} alt="" />
               </div>
               <div className={s.info}>
                  <h3>Контакти</h3>
                  <div className={s.wrap}>

                     <p>Тел: (044) 492-95-99</p>
                     <p>E-mail: reklama@orimi.com.ua</p>
                     <p>Адрес: 03126, г. Киев,
                        ул. Академика Белецкого, 30</p>
                  </div>
                  <a href="https://www.google.com.ua/maps/place/%D0%92%D0%B5%D1%81%D1%82+%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0,+%D0%A2%D0%9E%D0%92/@48.273952,25.9902017,18.17z/data=!4m5!3m4!1s0x47340922ae043887:0x5f0fa7b1fb1a14cd!8m2!3d48.2734108!4d25.9903485!5m1!1e1?hl=ru"
                     target="_blank">Перейти
            на карту</a>
               </div>
            </div>
            <Footer />
         </>
      )
   }
}