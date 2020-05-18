import React from 'react';
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import axios from '../../lib/api'
import s from './styles.module.css'
import NueInput from '../nueTourInput/index'
// import styled from 'styled-components';




export default class extends React.Component {

   state = {
      uk: "flex",
      en: "none",
      ro: "none",
      validError: "none",
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
      // nonValid: false,
      checkValidation: false,
      nueTour: {
         "englishType": "",
         "englishCountry": "",
         "englishResort": "",
         "englishDepartureFrom": "",
         "departureDate": "",
         "englishHotel": "",
         "nights": "",
         "englishFood": "",
         "englishInsurance": "",
         "price": "",
         "ukrainianType": "",
         "ukrainianCountry": "",
         "ukrainianDepartureFrom": "",
         "ukrainianResort": "",
         "ukrainianHotel": "",
         "ukrainianFood": "",
         "ukrainianInsurance": "",
         "romanianType": "",
         "romanianCountry": "",
         "romanianDepartureFrom": "",
         "romanianResort": "",
         "romanianHotel": "",
         "romanianFood": "",
         "romanianInsurance": ""
      }
   }

   openUk = () => {
      this.setState({ uk: "flex", en: "none", ro: "none" })
   }
   openEn = () => {
      this.setState({ uk: "none", en: "flex", ro: "none" })
   }
   openRo = () => {
      this.setState({ uk: "none", en: "none", ro: "flex" })
   }

   validErrorText = (vueErrorText) => {
      if (vueErrorText) {
         this.setState({ validError: "block" })
      } else {
         this.setState({ validError: "none" })
      }
   }

   createTour = (e) => {
      const nueTour = { ...this.state.nueTour, [e.target.name]: e.target.value }
      this.setState({ nueTour })
   }

   formValidation = (e) => {
      let isFormValid = { ...this.state.isFormValid }
      let vueErrorText = false;
      Object.keys(this.state.nueTour).map(item => {
         if (!this.state.nueTour[item] == "") {
            isFormValid[item] = true;
         } else {
            // this.setState({ nonValid: true })
            vueErrorText = true;
            isFormValid[item] = false;
         }
         this.setState({ isFormValid })
         this.setState({ checkValidation: true })
      })
      vueErrorText ? e.preventDefault() : this.createTours();

      this.validErrorText(vueErrorText)
   }

   createTours = () => {
      axios.post('/api/create-tour', this.state.nueTour)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         })

   }


   foo = () => {
      // console.log(this.state.nueTour);
      // console.log(this.state.isFormValid);
      // console.log(this.state);

   }

   render() {
      // this.foo()
      return (
         <Modal
            className={s.modal}
            isOpen={this.props.showModal}
            contentLabel="Minimal Modal Example"
         >

            {Modal.setAppElement('#root')}
            <div onClick={this.props.closeModal} className={s.modalButton} >X</div>
            <div className={s.langWrap}>
               <div className={s.langBtn} onClick={this.openUk}>UK</div>
               <div className={s.langBtn} onClick={this.openEn}>EN</div>
               <div className={s.langBtn} onClick={this.openRo}>RO</div>
            </div>

            <div className={s.mainError} style={{ display: this.state.validError }}>ERROR</div>

            <form action="">

               <div className={s.wrap} style={{ display: this.state.uk }} >
                  <div className={s.item} id="test">
                     <p className={s.modalInputText}>Тип подорожі</p>
                     <NueInput name="ukrainianType"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianType}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Країна</p>
                     <NueInput name="ukrainianCountry"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianCountry}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Курорт</p>
                     <NueInput name="ukrainianResort"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianResort}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Виліт із</p>
                     <NueInput name="ukrainianDepartureFrom"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianDepartureFrom}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Дата вильоту/виїзду</p>
                     <NueInput name="departureDate"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.departureDate}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Готель</p>
                     <NueInput name="ukrainianHotel"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianHotel}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Ночей</p>
                     <NueInput name="nights"
                        createTour={this.createTour}
                        patern={"num"}
                        isFormValid={this.state.isFormValid.nights}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Харчування</p>
                     <NueInput name="ukrainianFood"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianFood}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Страхування</p>
                     <NueInput name="ukrainianInsurance"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianInsurance}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Ціна</p>
                     <NueInput name="price"
                        createTour={this.createTour}
                        patern={"num"}
                        isFormValid={this.state.isFormValid.price}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
               </div >
               <div className={s.wrap} style={{ display: this.state.en }} >
                  <div className={s.item}>
                     <p className={s.modalInputText}>Type of trip</p>
                     <NueInput name="englishType"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishType}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Country</p>
                     <NueInput name="englishCountry"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishCountry}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Resort</p>
                     <NueInput name="englishResort"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishResort}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Departure from</p>
                     <NueInput name="englishDepartureFrom"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishDepartureFrom}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Hotel</p>
                     <NueInput name="englishHotel"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishHotel}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Food</p>
                     <NueInput name="englishFood"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishFood}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Insurance</p>
                     <NueInput name="englishInsurance"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishInsurance}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
               </div >
               <div className={s.wrap} style={{ display: this.state.ro }} >
                  <div className={s.item}>
                     <p className={s.modalInputText}>Тип подорожі</p>
                     <NueInput name="romanianType"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianType}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Країна</p>
                     <NueInput name="romanianCountry"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianCountry}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Курорт</p>
                     <NueInput name="romanianDepartureFrom"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianDepartureFrom}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Виліт із</p>
                     <NueInput name="romanianResort"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianResort}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Готель</p>
                     <NueInput name="romanianHotel"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianHotel}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Харчування</p>
                     <NueInput name="romanianFood"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianFood}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Страхування</p>
                     <NueInput name="romanianInsurance"
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianInsurance}
                        checkValidation={this.state.checkValidation}
                     />
                  </div>
               </div >
               <input type="reset" value="Відправити" className={s.modalButtonSend} onClick={(e) => this.formValidation(e)} />
            </form>

         </Modal >
      )
   }
}