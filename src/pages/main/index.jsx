import React from 'react';
import axios from 'lib/api'
import s from './styles.module.css'
import langCheaker from '../../helpers/languages/langChanges'
import Header from 'components/header'
import TourItem from 'components/tours/tourItem'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { success, error } from '../../helpers/notification'
import Spiner from 'components/spiner'
import About from '../../components/about'
import Partners from 'components/partners'
import Certificates from 'components/certificates'
import Footer from 'components/footer'
import data from './toursData'

export default class extends React.Component {

   state = {
      tours: [],
      hotTours: [],
      load: true
   }

   changeHead = (lang) => this.setState({ lang: lang })

   handleOpenModal = () => this.setState({ showModal: true });

   handleCloseModal = () => this.setState({ showModal: false });

   getTours = () => {
      axios.get('/api/hot-tours')
         .then((response) => {
            this.setState({ tours: response.data, load: false })
         })
         .catch((error) => {
            console.log(error);
         })
   }

   componentDidMount = () => {
      let lang = localStorage.getItem('lang');
      if (lang === 'en') {
         this.setState({ tours: data.en })
      }

      if (lang === 'ua') {
         this.setState({ tours: data.ua })
      }

      if (lang === 'ro') {
         this.setState({ tours: data.ro })
      }
   }

   changeIsSelected = (arrayNum) => {
      let tours = [...this.state.tours]
      tours.splice(arrayNum, 1);
      this.setState({ tours })
   }

   createNotification = (typeOfNotification, message) => {
      if (typeOfNotification) {
         store.addNotification(
            {
               ...success,
               title: "Операція успішна",
               message: message,
            })
      } else {
         store.addNotification(
            {
               ...error,
               title: "Проблема!",
               message: message,
            })
      }
   }

   deleteItemFromList = (id) => {
      let toursList = this.state.tours;

      const index = toursList.findIndex(obj => obj.id === id);
      if (index !== -1) {
         toursList.splice(index, 1);
      }

      this.setState({ tours: toursList })
   }

   render() {
      let lang = localStorage.getItem('lang');
      let langObj = langCheaker(lang);

      return (
         <>
            <Header changeHead={this.changeHead} />
            <ReactNotification />
            <div className={s.mainElem}> <div className={s.mainHeader}>
               <h1>{langObj.mainHeader}</h1>
               <span>{langObj.mainHeaderSpan}</span>
            </div>
            </div>
            {this.state.tours[0] !== undefined ? (
               <section className={s.tour}>
                  <h2>{langObj.hotToursHeader}</h2>
                  <div className={s.items}>

                     { this.state.tours.map((tour, i) => {

                           return <TourItem key={tour.id}
                              id={tour.id}
                              isSelected={tour.isSelected}
                              image_uid={tour.image}
                              arrayNum={i}
                              changeIsSelected={this.changeIsSelected}
                              createNotification={this.createNotification}
                              mainPage={false}
                              deleteItemFromList={this.deleteItemFromList}
                              tour={tour} />
                        
                     })}
                  </div>
               </section>) : ''}
            <About />
            <Partners />
            <Certificates />
            <Footer />
         </>
      )
   }
}