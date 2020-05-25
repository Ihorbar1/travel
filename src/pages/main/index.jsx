import React from 'react';
// import ReactDOM from "react-dom";
import axios from '../../lib/api'
import Modal from 'react-modal';
import s from './styles.module.css'
import Header from '../../components/header/index'
import TourItem from '../../components/tours/tourItem/index'
import Partners from '../../components/partners/index'
import Certificates from '../../components/certificates/index'
import Footer from '../../components/footer/index'

export default class extends React.Component {

   state = {
      tours: []
   }

   test = (lang) => {
      this.setState({ lang: lang })
   }

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      this.setState({ showModal: false });
   }

   getTours = () => {
      axios.get('/api/tours')
         .then((response) => {
            this.setState({ tours: response.data })
         })
         .catch((error) => {
            // handle error
            console.log(error);
         })

   }
   componentDidMount = () => {
      this.getTours()
   }

   foo = () => { return this.state.tours.filter(item => item.isSelected) }

   render() {
      let lang = localStorage.getItem('lang');
      return (
         <>
            <Header changeHead={this.test} />
            <div className={s.mainElem}> <span><p>Туристичні послуги</p></span> </div>
            <section className={s.tour}>
               <h2>Тури</h2>
               <div className={s.items}>
                  {this.foo().map(tour => <TourItem key={tour.id} id={tour.id} tour={(lang === 'uk') ? (tour.ukrainian) : ((lang === 'en') ? (tour.english) : ((lang === 'ro') ? (tour.romanian) : (tour.ukrainian)))} />)}
               </div>
            </section>
            <Partners />
            <Certificates />
            <Footer />
         </>
      )
   }
}