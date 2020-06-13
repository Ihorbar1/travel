import React from 'react';
// import ReactDOM from "react-dom";
import axios from 'lib/api'
// import Modal from 'react-modal';
import s from './styles.module.css'
// import { ua, en, ro } from 'helpers/languages';
import langCheaker from '../../helpers/languages/langChanges'
// import langObj from 'helpers/languages/langChanges.js'
import Header from 'components/header'
import TourItem from 'components/tours/tourItem'
import Spiner from 'components/spiner'
import Partners from 'components/partners'
import Certificates from 'components/certificates'
import Footer from 'components/footer'

export default class extends React.Component {

   state = {
      tours: [],
      hotTours: [],
      load: true
   }

   changeHead = (lang) => {
      this.setState({ lang: lang })
   }

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      this.setState({ showModal: false });
   }

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
      this.getTours()
   }
   changeIsSelected = (arrayNum) => {
      let tours = [...this.state.tours]
      tours.splice(arrayNum, 1);
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
      let langObj = langCheaker(lang);
      console.log(this.state.tours);


      return (
         <>
            <Header changeHead={this.changeHead} />
            <div className={s.mainElem}> <span><p>{langObj.mainHeader}</p></span> </div>
            {this.state.tours[0] != undefined ? (
               <section className={s.tour}>
                  <h2>{langObj.hotToursHeader}</h2>
                  <div className={s.items}>

                     {this.state.load ? <Spiner /> : this.state.tours.map((tour, i) => {
                        if (tour.isSelected) {
                           return <TourItem key={tour.id}
                              id={tour.id}
                              isSelected={tour.isSelected}
                              image_uid={tour.imageId.image_uid}
                              arrayNum={i}
                              changeIsSelected={this.changeIsSelected}
                              mainPage={true}
                              tour={(lang === 'uk') ? (tour.ukrainian) : ((lang === 'en') ? (tour.english) : ((lang === 'ro') ? (tour.romanian) : (tour.ukrainian)))} />
                        }
                     })}
                  </div>
               </section>) : ''}

            <Partners />
            <Certificates />
            <Footer />
         </>
      )
   }
}