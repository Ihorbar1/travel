import React from 'react';
// import ReactDOM from "react-dom";
import axios from '../../lib/api'
// import Modal from 'react-modal';
import { ua, en, ro } from 'helpers/languages';
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import TourItem from '../../components/tours/tourItem/index'
import Footer from '../../components/footer/index'
import NueTourModal from '../../components/nueTourModal/index'
import s from './styles.module.css'
// import styled from 'styled-components';

export default class extends React.Component {
   state = {
      tours: [],
      showModal: false
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

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      this.setState({ showModal: false });
   }

   foo = () => {
      // let lang = localStorage.getItem('lang');
      // let elem = [];
      // let a = Object.keys(this.state.tours).map((item, i) => {
      //    // console.log(this.state.tours[item].isSelected);
      //    // debugger;
      //    if (this.state.tours[item].isSelected) {
      //       if (lang === 'ua') {
      //          elem += <TourItem key={this.state.tours[item].id} id={this.state.tours[item].id} tour={this.state.tours[item].ukrainian} />
      //       } else if (lang === 'en') {
      //          elem += <TourItem key={this.state.tours[item].id} id={this.state.tours[item].id} tour={this.state.tours[item].english} />
      //       } else if (lang === 'ro') {
      //          elem += <TourItem key={this.state.tours[item].id} id={this.state.tours[item].id} tour={this.state.tours[item].romanian} />
      //       }
      //    }
      //    console.log(elem);


      // })

      // let a = this.state.tours.filter(item => {
      //    return item.isSelected
      // })




      // return a;

      // if (lang == 'uk') {
      //    return "tour.ukrainian"
      // } else if (lang === 'en') {
      //    return "tour.english"
      // }
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



   changeHead = (lang) => {
      this.setState({ lang: lang })
   }

   render() {
      // console.log(this.state.tours);
      // console.log(this.foo());
      // this.foo()
      // this.foo()
      let lang = localStorage.getItem('lang');
      let langObj;
      switch (lang) {
         case 'en':
            langObj = en;
            break;
         case 'ro':
            langObj = ro;
            break;
         default:
            langObj = ua;
      }
      return (
         <main>
            <Header changeHead={this.changeHead} />
            <Main text={langObj.toursHeader} />
            <section className={s.tour}>
               <h2>{langObj.tourCompHeader}</h2>
               <div className={s.items}>
                  {this.state.tours.map((tour, i) => <TourItem key={tour.id}
                     id={tour.id}
                     arrayNum={i}
                     isSelected={tour.isSelected}
                     changeIsSelected={this.changeIsSelected}
                     deleteTourInState={this.deleteTourInState}
                     mainPage={false}
                     tour={(lang === 'uk') ? (tour.ukrainian) : ((lang === 'en') ? (tour.english) : ((lang === 'ro') ? (tour.romanian) : (tour.ukrainian)))} />)
                  }
               </div>
               <div onClick={this.handleOpenModal} className={s.nueTourBut}>+</div>
               <NueTourModal showModal={this.state.showModal} closeModal={this.handleCloseModal} />
            </section>
            <Footer />
         </main>
      )
   }
}