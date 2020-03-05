import React from 'react';
import ReactDOM from "react-dom";
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import TourItem from '../../components/tours/tourItem/index'
import s from './styles.module.css'

export default class extends React.Component {
   state = {
      tour: [
         {
            typeOfTravel: {
               name: 'Тип подорожі',
               value: 'Пляжний відпочинок'
            },
            country: {
               name: 'Країна',
               value: 'Катар'
            },
            resort: {
               name: 'Курорт',
               value: 'Доха'
            },
            departureFrom: {
               name: 'Виліт із',
               value: 'Київ'
            },
            departureDate: {
               name: 'Дата вильоту/виїзду',
               value: '17.11.19'
            },
            hotel: {
               name: 'Готель',
               value: 'Hotel test 1'
            },
            nights: {
               name: 'Ночей',
               value: '7'
            },
            food: {
               name: 'Харчування',
               value: 'Сніданки'
            },
            insurense: {
               name: 'Страхування',
               value: 'Медичне'
            },
            Prise: {
               name: 'Ціна',
               value: '$499'
            },
         }
      ]
   }

   render() {
      return (
         <main>
            <Header></Header>
            <Main></Main>
            <section className={s.tour}>
               <h2>Тури</h2>
               <div className={s.items}>
                  <TourItem tour={this.state.tour}></TourItem>
                  {/* <div className={s.item}></div> */}
               </div>
            </section>
         </main>
      )
   }
}