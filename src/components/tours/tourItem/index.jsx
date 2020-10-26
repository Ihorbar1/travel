import React from 'react';
import axios from '../../../lib/api'
import Modal from 'react-modal';
import moment from 'moment';
import langCheaker from 'helpers/languages/langChanges'
import s from './styles.module.css';
import { ButtonWrap, ButtonAdd, ButtonDel, ButtonDelTour } from './styles.jsx'

class TourItem extends React.Component {

   state = {
      showModal: false,
      hamburgerActive: false,
   }

   handleOpenModal = () => this.setState({ showModal: true });
   handleCloseModal = () => this.setState({ showModal: false });



   delTourItem = () => {
      axios.delete(`/api/delete-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.deleteTourInState(this.props.arrayNum)
            this.props.createNotification(true, "Тур успішно видалено")
         })
         .catch((error) => {
            console.log(error);
            this.props.createNotification(false, "Невдалось видалити тур")
         })
   }

   addToHotTour = () => {
      axios.put(`/api/add-to-hot-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.changeIsSelected(this.props.arrayNum, true)
            this.props.createNotification(true, "Тур добавлено в гарячі тури")
         })
         .catch((error) => {
            console.log(error);
            this.props.createNotification(false, "Невдалось добавити тур в гарячі тури")
         })

   }

   deleteFromHotTours = () => {
      axios.put(`/api/delete-from-hot-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.changeIsSelected(this.props.arrayNum, false)
            this.props.createNotification(true, "Тур видалено з гарячих турів")
         })
         .catch((error) => {
            console.log(error);
            this.props.createNotification(false, "Невдалось видалити тур з гарячих турів")
         })

   }

   stringCheaker = (str) => str.length <= 30 ? str : `${str.substring(0, 30)}... `


   render() {
      let lang = localStorage.getItem('lang');
      const role = localStorage.getItem('role')
      let langObj = langCheaker(lang);

      return (
         <>
            <div className={s.item} >
               {role === 'admin' ? <span className={`${s.btn} ${this.state.hamburgerActive ? s.active : null}`} onClick={() => this.setState({ hamburgerActive: !this.state.hamburgerActive })}>
                  <span></span>
               </span> : ''}

               <ButtonWrap className={s.buttonWrap} hamburgerActive={this.state.hamburgerActive} >
                  <ButtonDelTour onClick={this.delTourItem} mainPage={this.props.mainPage}>Видалити тур</ButtonDelTour>
                  <ButtonAdd onClick={this.addToHotTour} isSelected={this.props.isSelected}>Добавити в гарячі тури</ButtonAdd>
                  <ButtonDel onClick={this.deleteFromHotTours} isSelected={this.props.isSelected} mainPage={this.props.mainPage}>Видалити з гарячих турів</ButtonDel>
               </ButtonWrap>
               <img src={this.props.image_uid} alt="test" />
               <div className={s.text}>
                  <p>{langObj.typeOfTrip}</p>
                  <p>{this.stringCheaker(this.props.tour.type)}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.country}</p>
                  <p>{this.stringCheaker(this.props.tour.country)}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.resort}</p>
                  <p>{this.stringCheaker(this.props.tour.resort)}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.departureFrom}</p>
                  <p>{this.stringCheaker(this.props.tour.departureFrom)}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.departureDate}</p>
                  <p>{moment(this.props.tour.departureDate).format('L')}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.hotel}</p>
                  <p>{this.stringCheaker(this.props.tour.hotel)}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.hights}</p>
                  <p>{this.props.tour.nights}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.food}</p>
                  <p>{this.stringCheaker(this.props.tour.food)}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.insurance}</p>
                  <p>{this.stringCheaker(this.props.tour.insurance)}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.price}</p>
                  <p>${this.props.tour.price}</p>
               </div>
               <div className={s.text}>
                  <p></p>
                  <button onClick={this.handleOpenModal}>{langObj.learnMore}</button>
                  <Modal
                     className={s.modal}
                     isOpen={this.state.showModal}
                     contentLabel="Minimal Modal Example"
                     onRequestClose={this.handleCloseModal}
                  >

                     {Modal.setAppElement('#root')}
                     <div onClick={this.handleCloseModal} className={s.modalButton}>X</div>
                     <h3>{langObj.modalTitle}</h3>
                     <p className={s.modalInputText}>{langObj.name}</p>
                     <input type="text" className={s.modalInput} />
                     <p className={s.modalInputText}>{langObj.phone}</p>
                     <input type="tel" className={s.modalInput} />
                     <p className={s.modalInputText}>{langObj.email}</p>
                     <input type="text" className={s.modalInput} />
                     <p className={s.modalInputText}>{langObj.question}</p>
                     <textarea name="" id="" cols="30" rows="5" className={s.modalInput} ></textarea>
                     <div className={s.modalButtonSend}><p>{langObj.send}</p></div>
                  </Modal>
               </div>
            </div>
         </>
      )
   }
}

export default TourItem;