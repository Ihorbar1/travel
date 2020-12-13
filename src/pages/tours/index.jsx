import React from 'react';
import axios from '../../lib/api'
import Header from 'components/header/'
import Main from 'components/main'
import TourItem from 'components/tours/tourItem'
import Footer from 'components/footer'
import NewTourModal from 'components/newTourModal'
import Spiner from 'components/spiner'
import langCheaker from '../../helpers/languages/langChanges'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { success, error } from '../../helpers/notification'
import s from './styles.module.css'

export default class extends React.Component {
   state = {
      tours: [],
      showModal: false,
      load: true,
   }

   getTours = () => {
      axios.get('/api/tours')
         .then((response) => {
            this.setState({ tours: response.data, load: false })
         })
         .catch((error) => {
            console.log(error);
         })
   }

   componentDidMount = () => {
      this.getTours()
   }

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      this.setState({ showModal: false });
   }

   deleteTourInState = (arrayNum) => {
      let tours = [...this.state.tours]
      tours.splice(arrayNum, 1);
      this.setState({ tours })
   }

   changeIsSelected = (arrayNum, isSelected) => {
      let tours = [...this.state.tours]
      tours[arrayNum].isSelected = isSelected
      this.setState({ tours })
   }

   changeHead = (lang) => this.setState({ lang: lang })

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

   render() {
      let lang = localStorage.getItem('lang');

      const role = localStorage.getItem('role')

      let langObj = langCheaker(lang);

      return (
         <main>
            <Header changeHead={this.changeHead} />
            <ReactNotification />
            <Main text={langObj.toursHeader} />
            <section className={s.tour}>
               <h2>{langObj.tourCompHeader}</h2>
               {this.state.load ? <Spiner /> : <div className={s.items}>
                  {this.state.tours.map((tour, i) => <TourItem key={tour.id}
                     id={tour.id}
                     arrayNum={i}
                     image_uid={tour.imageId.image_uid}
                     isSelected={tour.isSelected}
                     changeIsSelected={this.changeIsSelected}
                     deleteTourInState={this.deleteTourInState}
                     createNotification={this.createNotification}
                     mainPage={false}
                     tour={(lang === 'uk') ? (tour.ukrainian) : ((lang === 'en') ? (tour.english) : ((lang === 'ro') ? (tour.romanian) : (tour.ukrainian)))} />)
                  }
               </div>}

               {role === 'admin' ? <div onClick={this.handleOpenModal} className={s.nueTourBut}>+</div> : ''}

               <NewTourModal showModal={this.state.showModal} closeModal={this.handleCloseModal} />
            </section>
            <Footer />
         </main>
      )
   }
}