import React from 'react';
// import ReactDOM from "react-dom";
import axios from '../../../lib/api'
import Modal from 'react-modal';
import moment from 'moment';
import langCheaker from 'helpers/languages/langChanges'
import s from './styles.module.css';
import { ButtonWrap, ButtonAdd, ButtonDel, ButtonDelTour } from './styles.jsx'
import img from '../../../assets/img/img0.jpg'

class TourItem extends React.Component {

   state = {
      showModal: false,
      hamburgerActive: false,
      imgFile: ''
   }

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      // console.log('test');

      this.setState({ showModal: false });
   }

   componentDidMount = () => {
      axios(
         {
            method: 'get',
            url: `/images/${this.props.image_uid}`,
            Accept: 'image/jpg, image/jpeg, image/png'
         }
      )
         .then((response) => {
            console.log(response);
            this.setState({
               imgFile: `${response.config.baseURL}/${response.config.url}`,

               // loadingAvatar: false
            });
            // console.log(response);
         })
         .catch((error) => {
            console.log(error);
         })
   }


   delTourItem = () => {
      axios.delete(`/api/delete-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.deleteTourInState(this.props.arrayNum)
         })
         .catch((error) => {
            console.log(error);
         })

      console.log(this.props.id);
   }

   addToHotTour = () => {
      axios.put(`/api/add-to-hot-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.changeIsSelected(this.props.arrayNum, true)
         })
         .catch((error) => {
            console.log(error);
         })

   }

   deleteFromHotTours = () => {
      axios.put(`/api/delete-from-hot-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.changeIsSelected(this.props.arrayNum, false)
         })
         .catch((error) => {
            console.log(error);
         })

   }

   // togglehamburgerActive = () => {
   //    const hamburgerActive = this.state.hamburgerActive
   //    this.setState({ hamburgerActive: !hamburgerActive })
   // }

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
               <img src={this.state.imgFile} alt="test" />
               <div className={s.text}>
                  <p>{langObj.typeOfTrip}</p>
                  <p>{this.props.tour.type}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.country}</p>
                  <p>{this.props.tour.country}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.resort}</p>
                  <p>{this.props.tour.resort}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.departureFrom}</p>
                  <p>{this.props.tour.departureFrom}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.departureDate}</p>
                  <p>{moment(this.props.tour.departureDate).format('L')}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.hotel}</p>
                  <p>{this.props.tour.hotel}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.hights}</p>
                  <p>{this.props.tour.nights}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>{langObj.food}</p>
                  <p>{this.props.tour.food}</p>
               </div>
               <div className={s.text}>
                  <p>{langObj.insurance}</p>
                  <p>{this.props.tour.insurance}</p>
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