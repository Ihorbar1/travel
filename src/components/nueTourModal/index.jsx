import React from 'react';
// import ReactDOM from "react-dom";
import Modal from 'react-modal';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import axios from '../../lib/api'
import s from './styles.module.css'
import NueInput from '../nueTourInput/index'
// import styled from 'styled-components';




export default class extends React.Component {

   state = {
      // reload: "false",
      isFormValid: {
         "englishType": false,
         "englishCountry": false,
         "englishResort": false,
         "englishDepartureFrom": false,
         "departureDate": false,
         "englishHotel": false,
         "nights": false,
         "englishFood": false,
         "englishInsurance": false,
         "price": false,
         "ukrainianType": false,
         "ukrainianCountry": false,
         "ukrainianDepartureFrom": false,
         "ukrainianResort": false,
         "ukrainianHotel": false,
         "ukrainianFood": false,
         "ukrainianInsurance": false,
         "romanianType": false,
         "romanianCountry": false,
         "romanianDepartureFrom": false,
         "romanianResort": false,
         "romanianHotel": false,
         "romanianFood": false,
         "romanianInsurance": false
      },
      // itemValidation: true,
      // checkValidation: false,
      nueTour: {
         // "englishType": "",
         // "englishCountry": "",
         // "englishResort": "",
         // "englishDepartureFrom": "",
         // "departureDate": "",
         // "englishHotel": "",
         // "nights": "",
         // "englishFood": "",
         // "englishInsurance": "",
         // "price": "",
         // "ukrainianType": "",
         // "ukrainianCountry": "",
         // "ukrainianDepartureFrom": "",
         // "ukrainianResort": "",
         // "ukrainianHotel": "",
         // "ukrainianFood": "",
         // "ukrainianInsurance": "",
         // "romanianType": "",
         // "romanianCountry": "",
         // "romanianDepartureFrom": "",
         // "romanianResort": "",
         // "romanianHotel": "",
         // "romanianFood": "",
         // "romanianInsurance": ""
      }
   }

   // validErrorText = (emptyValidation) => {
   //    if (emptyValidation) {
   //       this.createNotification('error')
   //    } else {
   //       this.createNotification('success')
   //    }
   // }

   // checkItemValidation = ()=>{

   // }

   createTour = (e) => {
      const nueTour = { ...this.state.nueTour, [e.target.name]: e.target.value }
      this.setState({ nueTour })
   }

   formValidation = (e) => {
      // let isFormValid = { ...this.state.isFormValid }
      let emptyValidation = true;
      Object.keys(this.state.isFormValid).map(item => {
         if (!this.state.isFormValid[item]) {
            // isFormValid[item] = true;
            // this.createTours()
            emptyValidation = false;
            // break;

         }
      })
      // this.setState({ isFormValid })
      this.setState({ checkValidation: true })
      emptyValidation ? this.createTours() : e.preventDefault();

      this.createNotification(emptyValidation)
   }

   createTours = () => {
      axios.post('/api/create-tour', this.state.nueTour)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         })

      // this.setState({ reload: true })
   }

   changeValidationFlag = (name, flag) => {
      const isFormValid = { ...this.state.isFormValid, [name]: flag }
      this.setState({ isFormValid })
   }

   createNotification = (emptyValidation) => {
      if (emptyValidation) {
         return store.addNotification(
            {
               title: "Wonderful!",
               message: "teodosii@react-notifications-component",
               type: "success",
               insert: "top",
               container: "top-right",
               animationIn: ["animated", "fadeIn"],
               animationOut: ["animated", "fadeOut"],
               dismiss: {
                  duration: 5000,
                  onScreen: true
               }
            }
            // {
            // ...success,
            // message: res.data
            // }
         );
      } else {
         return store.addNotification({
            // id: "test",
            title: "Wonderful!",
            message: "teodosii@react-notifications-component",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
               duration: 5000,
               onScreen: true
            }
         });
      }
   }


   foo = () => {
      console.log(this.state.nueTour);

   }



   render() {
      // this.foo()
      // Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.85)'

      return (
         <Modal
            className={s.modal}
            isOpen={this.props.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.props.closeModal}
         >

            {Modal.setAppElement('#root')}
            <ReactNotification />
            <button onClick={this.foo}>sdfsdf</button>
            <button onClick={this.props.closeModal} className={s.modalButton} >X</button>
            <form action="" className={s.form}>

               <div className={s.wrap} >
                  <h3>Тури на Українській мові</h3>
                  <div className={s.item} id="test">
                     <p className={s.modalInputText}>Тип подорожі</p>
                     <NueInput name="ukrainianType"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianType}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Країна</p>
                     <NueInput name="ukrainianCountry"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianCountry}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Курорт</p>
                     <NueInput name="ukrainianResort"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianResort}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Виліт із</p>
                     <NueInput name="ukrainianDepartureFrom"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianDepartureFrom}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Дата вильоту/виїзду</p>
                     <NueInput name="departureDate"
                        type={"date"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.departureDate}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Готель</p>
                     <NueInput name="ukrainianHotel"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianHotel}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Ночей</p>
                     <NueInput name="nights"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"num"}
                        isFormValid={this.state.isFormValid.nights}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Харчування</p>
                     <NueInput name="ukrainianFood"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianFood}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Страхування</p>
                     <NueInput name="ukrainianInsurance"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianInsurance}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Ціна</p>
                     <NueInput name="price"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"num"}
                        isFormValid={this.state.isFormValid.price}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
               </div>
               <div className={s.wrap} >
                  <h3>Тури на Англійській мові</h3>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Type of trip</p>
                     <NueInput name="englishType"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishType}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Country</p>
                     <NueInput name="englishCountry"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishCountry}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Resort</p>
                     <NueInput name="englishResort"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishResort}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Departure from</p>
                     <NueInput name="englishDepartureFrom"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishDepartureFrom}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Hotel</p>
                     <NueInput name="englishHotel"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishHotel}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Food</p>
                     <NueInput name="englishFood"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishFood}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Insurance</p>
                     <NueInput name="englishInsurance"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishInsurance}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
               </div>
               <div className={s.wrap} >
                  <h3>Тури на Румунській мові</h3>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Тип подорожі</p>
                     <NueInput name="romanianType"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianType}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Країна</p>
                     <NueInput name="romanianCountry"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianCountry}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Курорт</p>
                     <NueInput name="romanianDepartureFrom"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianDepartureFrom}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Виліт із</p>
                     <NueInput name="romanianResort"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianResort}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Готель</p>
                     <NueInput name="romanianHotel"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianHotel}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Харчування</p>
                     <NueInput name="romanianFood"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianFood}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Страхування</p>
                     <NueInput name="romanianInsurance"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianInsurance}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
               </div>
               <input type="reset" value="Відправити" className={s.modalButtonSend} onClick={(e) => this.formValidation(e)} />
            </form>

         </Modal>
      )
   }
}