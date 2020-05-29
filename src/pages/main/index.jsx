import React from 'react';
// import ReactDOM from "react-dom";
import axios from '../../lib/api'
// import Modal from 'react-modal';
import s from './styles.module.css'
import Header from '../../components/header/index'
import TourItem from '../../components/tours/tourItem/index'
import Partners from '../../components/partners/index'
import Certificates from '../../components/certificates/index'
import Footer from '../../components/footer/index'

export default class extends React.Component {

   state = {
      tours: [],
      hotTours: []
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
            console.log(error);
         })
   }
   componentDidMount = () => {
      this.getTours()
   }
   changeIsSelected = (arrayNum, isSelected) => {
      let tours = [...this.state.tours]
      tours[arrayNum].isSelected = isSelected
      this.setState({ tours })
   }

   // foo = () => {
   //    let hotTours = [...this.state.hotTours]
   //    hotTours = this.state.tours.filter(item => { return item.isSelected })
   //    console.log(hotTours);

   //    // this.setState({ hotTours })
   // }

   // componentWillMount = () => {

   //    this.foo()
   // }

   render() {
      let lang = localStorage.getItem('lang');

      return (
         <>
            <Header changeHead={this.test} />
            <div className={s.mainElem}> <span><p>Туристичні послуги</p></span> </div>
            <section className={s.tour}>
               <h2>Тури</h2>
               <div className={s.items}>

                  {this.state.tours.map((tour, i) => {
                     if (tour.isSelected) {
                        return <TourItem key={tour.id}
                           id={tour.id}
                           isSelected={tour.isSelected}
                           arrayNum={i}
                           changeIsSelected={this.changeIsSelected}
                           mainPage={true}
                           tour={(lang === 'uk') ? (tour.ukrainian) : ((lang === 'en') ? (tour.english) : ((lang === 'ro') ? (tour.romanian) : (tour.ukrainian)))} />
                     }
                  })}
               </div>
            </section>
            <Partners />
            <Certificates />
            <Footer />
         </>
      )
   }
}