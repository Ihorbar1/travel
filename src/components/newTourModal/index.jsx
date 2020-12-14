import React from 'react';
import Modal from 'react-modal';
import Spiner from '../../components/spiner'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import axios from '../../lib/api'
import s from './styles.module.css'
import NewInput from '../newTourInput/index'
import { error } from '../../helpers/notification'




export default class extends React.Component {

   state = {
      load: false,
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
      imgFileName: 'Загрузити картинку',
      imageURI: null,
      file: '',
      nueTour: {
         // "englishType": "Excursion tour",
         // "englishCountry": "Italy",
         // "englishResort": "Venice-Rome-Florence",
         // "englishDepartureFrom": "Lviv (bus)",
         // "departureDate": "2020-07-28",
         // "englishHotel": "Europa Pension",
         // "nights": "23",
         // "englishFood": "breakfasts",
         // "englishInsurance": "medical",
         // "price": "566",
         // "ukrainianType": "Екскурсійний тур",
         // "ukrainianCountry": "Італія",
         // "ukrainianDepartureFrom": "Венеція-Рим-Флоренція",
         // "ukrainianResort": "Львів (автобус)",
         // "ukrainianHotel": "Europa Pension",
         // "ukrainianFood": "сніданки",
         // "ukrainianInsurance": "медичне",
         // "romanianType": "Tur de excursie",
         // "romanianCountry": "Italia",
         // "romanianDepartureFrom": "Venezia-Roma-Florența",
         // "romanianResort": "Lviv (autobuz)",
         // "romanianHotel": "Europa Pension",
         // "romanianFood": "Micul dejun",
         // "romanianInsurance": "medical"
      }
   }

   createTour = (e) => {
      const nueTour = { ...this.state.nueTour, [e.target.name]: e.target.value };
      this.setState({ nueTour });
   }

   formValidation = (e) => {
      let textValidation = true;
      let imgValidation = false;
      Object.keys(this.state.isFormValid).map(item => !this.state.isFormValid[item] ? textValidation = false : textValidation = true);
      this.state.file !== '' ? imgValidation = true : imgValidation = false;
      this.setState({ checkValidation: true });
      e.preventDefault();
      textValidation && imgValidation ? this.createTours(e) : e.preventDefault();
      // this.createTours(e);
      this.createNotification(textValidation, "Проблема!", "Помилка при створенні туру");
      this.createNotification(imgValidation, "Проблема!", "Виберіть фотографію");
   }

   createTours = (e) => {

      var target = e.target
      this.setState({ load: true })

      axios.post('/api/create-tour', this.state.nueTour)
         .then((response) => {
            console.log(response.data);
            let data = new FormData();
            data.append('tourId', response.data);
            data.append('file', target.imgUpload.files[0]);

            axios.post(`/api/upload`, data)
               .then((response) => {
                  this.setState({ load: false })
                  window.location.reload(true)
                  console.log(response);
               }).catch((error) => {
                  console.log(error);
                  this.setState({ load: false })
               })
         })
         .catch((error) => {
            console.log(error);
            this.setState({ load: false })
         })
   }

   changeValidationFlag = (name, flag) => {
      const isFormValid = { ...this.state.isFormValid, [name]: flag }
      this.setState({ isFormValid })
   }

   createNotification = (typeOfNotification, title, message) => {
      if (!typeOfNotification) {
         store.addNotification(
            {
               ...error,
               title: title,
               message: message,
            })
      }
   }



   buildImgTag() {
      let imgTag = null;
      if (this.state.imageURI !== null)
         imgTag = (<div className={s.item}>
            <img src={this.state.imageURI}></img>
         </div>);
      return imgTag;
   }

   readURI(e) {
      let reader = new FileReader();
      reader.onload = ev => this.setState({ imageURI: ev.target.result });
      reader.readAsDataURL(e.target.files[0]);
   }

   fileSelectedHandler = event => {
      this.readURI(event)
      this.setState({ file: [event.target.files[0]], imgFileName: 'Загрузити іншу картинку' })
   }


   render() {
      const imgTag = this.buildImgTag();

      return (
         <Modal
            className={s.modal}
            isOpen={this.props.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.props.closeModal}
         >

            {Modal.setAppElement('#root')}
            <ReactNotification />
            {this.state.load ? <div className={s.spin_wrap}>
               <Spiner />
            </div> : ""}

            <button onClick={this.props.closeModal} className={s.modalButton} >X</button>
            <form encType="multipart/form-data" className={s.form} onSubmit={(e) => this.formValidation(e)}>

               <div className={s.wrap} >
                  <h3>Тури на українській мові</h3>
                  <input type="file" name="imgUpload" style={{ display: 'none' }} onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} />
                  <div className={s.uploadImgButton} onClick={() => this.fileInput.click()}>{this.state.imgFileName}</div>
                  {imgTag}
                  <div className={s.item} id="test">
                     <p className={s.modalInputText}>Тип подорожі</p>
                     <NewInput name="ukrainianType"
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
                     <NewInput name="ukrainianCountry"
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
                     <NewInput name="ukrainianResort"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianResort}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Приліт / приїзд</p>
                     <NewInput name="ukrainianDepartureFrom"
                        type={"date"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianDepartureFrom}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>

                  <div className={s.item}>
                     <p className={s.modalInputText}>Готель</p>
                     <NewInput name="ukrainianHotel"
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
                     <NewInput name="nights"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.nights}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Харчування</p>
                     <NewInput name="ukrainianFood"
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
                     <NewInput name="ukrainianInsurance"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.ukrainianInsurance}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Дата вильоту/виїзду</p>
                     <NewInput name="departureDate"
                        type={"date"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.departureDate}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Ціна</p>
                     <NewInput name="price"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.price}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
               </div>
               <div className={s.wrap} >
                  <h3>Тури на англійській мові</h3>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Тип подорожі</p>
                     <NewInput name="englishType"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishType}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Країна</p>
                     <NewInput name="englishCountry"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishCountry}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Курорт/місто</p>
                     <NewInput name="englishResort"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishResort}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Виліт із</p>
                     <NewInput name="englishDepartureFrom"
                        type={"date"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishDepartureFrom}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Готель</p>
                     <NewInput name="englishHotel"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishHotel}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Харчування</p>
                     <NewInput name="englishFood"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.englishFood}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Страхування</p>
                     <NewInput name="englishInsurance"
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
                  <h3>Тури на румунській мові</h3>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Тип подорожі</p>
                     <NewInput name="romanianType"
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
                     <NewInput name="romanianCountry"
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
                     <NewInput name="romanianDepartureFrom"
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
                     <NewInput name="romanianResort"
                        type={"date"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianResort}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
                  <div className={s.item}>
                     <p className={s.modalInputText}>Готель</p>
                     <NewInput name="romanianHotel"
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
                     <NewInput name="romanianFood"
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
                     <NewInput name="romanianInsurance"
                        type={"text"}
                        createTour={this.createTour}
                        patern={"empty"}
                        isFormValid={this.state.isFormValid.romanianInsurance}
                        checkValidation={this.state.checkValidation}
                        changeValidationFlag={this.changeValidationFlag}
                     />
                  </div>
               </div>
               <input type="submit" value="Відправити" className={s.modalButtonSend} />
            </form>

         </Modal>
      )
   }
}