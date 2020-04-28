import React from 'react';
import ReactDOM from "react-dom";
import axios from '../../lib/api'
import Modal from 'react-modal';
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import TourItem from '../../components/tours/tourItem/index'
import Footer from '../../components/footer/index'
import NueTourModal from '../../components/nueTourModal/index'
import s from './styles.module.css'
import styled from 'styled-components';

export default class extends React.Component {
   state = {
      tours: [],
      showModal: false
   }

   getTours = () => {
      axios.get('/tours')
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

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      this.setState({ showModal: false });
   }

   foo = () => {
      let lang = localStorage.getItem('lang');
      // let a = this.state.tours.map(tour => {
      //    if (lang == 'uk') {
      //       <TourItem key={tour.id} tour={tour.ukrainian} />
      //    } else if (lang == 'en') {
      //       <TourItem key={tour.id} tour={tour.english} />
      //    }

      // })
      // return a;

      if (lang == 'uk') {
         return "tour.ukrainian"
      } else if (lang == 'en') {
         return "tour.english"
      }
   }

   test = (lang) => {
      this.setState({ lang: lang })

   }

   render() {
      console.log(this.state.tours);
      // this.foo()
      let a = localStorage.getItem('lang');
      return (
         <main>
            <Header changeHead={this.test} />
            <Main />
            <section className={s.tour}>
               <h2>Тури</h2>
               <div className={s.items}>
                  {this.state.tours.map(tour => <TourItem key={tour.id} tour={(a == 'uk') ? (tour.ukrainian) : ((a == 'en') ? (tour.english) : ((a == 'ro') ? (tour.romanian) : (tour.ukrainian)))} />)}
               </div>
               <div onClick={this.handleOpenModal} className={s.nueTourBut}>+</div>
               <NueTourModal showModal={this.state.showModal} closeModal={this.handleCloseModal} />
            </section>
            <Footer />
         </main>
      )
   }
}