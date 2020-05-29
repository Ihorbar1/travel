import React from 'react';
// import ReactDOM from "react-dom";
import axios from '../../../lib/api'
import Modal from 'react-modal';
import moment from 'moment';
import s from './styles.module.css';
import { ButtonAdd, ButtonDel, ButtonDelTour } from './styles.jsx'
import img from '../../../assets/img/img0.jpg'

export default class extends React.Component {

   state = {
      showModal: false
   }

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      // console.log('test');

      this.setState({ showModal: false });
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

   addToHoteTour = () => {
      axios.put(`/api/add-to-hot-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.changeIsSelected(this.props.arrayNum, true)
         })
         .catch((error) => {
            console.log(error);
         })

   }

   deleteFromHoteTours = () => {
      axios.put(`/api/delete-from-hot-tour/${this.props.id}`)
         .then((response) => {
            console.log(response);
            this.props.changeIsSelected(this.props.arrayNum, false)
         })
         .catch((error) => {
            console.log(error);
         })

   }

   render() {

      return (
         <>
            <div className={s.item} >
               <button className={s.del} >-</button>
               <div className={s.optionWrap} >
                  <ButtonDelTour onClick={this.delTourItem} mainPage={this.props.mainPage}>Видалити тур</ButtonDelTour>
                  <ButtonAdd onClick={this.addToHoteTour} isSelected={this.props.isSelected}>Добавити в гарячі тури</ButtonAdd>
                  <ButtonDel onClick={this.deleteFromHoteTours} isSelected={this.props.isSelected}>Видалити з гарячих турів</ButtonDel>
               </div>
               <img src={img} alt="test" />
               <div className={s.text}>
                  <p>Тип подорожі</p>
                  <p>{this.props.tour.type}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>Країна</p>
                  <p>{this.props.tour.country}</p>
               </div>
               <div className={s.text}>
                  <p>Курорт</p>
                  <p>{this.props.tour.resort}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>Виліт із</p>
                  <p>{this.props.tour.departureFrom}</p>
               </div>
               <div className={s.text}>
                  <p>Дата вильоту/виїзду</p>
                  <p>{moment(this.props.tour.departureDate).format('L')}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>Готель</p>
                  <p>{this.props.tour.hotel}</p>
               </div>
               <div className={s.text}>
                  <p>Ночей</p>
                  <p>{this.props.tour.nights}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>Харчування</p>
                  <p>{this.props.tour.food}</p>
               </div>
               <div className={s.text}>
                  <p>Страхування</p>
                  <p>{this.props.tour.insurance}</p>
               </div>
               <div className={`${s.text} ${s.second}`}>
                  <p>Ціна</p>
                  <p>${this.props.tour.price}</p>
               </div>
               <div className={s.text}>
                  <p></p>
                  <button onClick={this.handleOpenModal}>Дізнатись більше</button>
                  <Modal
                     className={s.modal}
                     isOpen={this.state.showModal}
                     contentLabel="Minimal Modal Example"
                     onRequestClose={this.handleCloseModal}
                  >

                     {Modal.setAppElement('#root')}
                     <div onClick={this.handleCloseModal} className={s.modalButton}>X</div>
                     <p className={s.modalInputText}>Імя</p>
                     <input type="text" className={s.modalInput} />
                     <p className={s.modalInputText}>Телефон</p>
                     <input type="tel" className={s.modalInput} />
                     <p className={s.modalInputText}>Email</p>
                     <input type="text" className={s.modalInput} />
                     <p className={s.modalInputText}>Запитання</p>
                     <textarea name="" id="" cols="30" rows="5" className={s.modalInput} ></textarea>
                     <div className={s.modalButtonSend}><p>Відправити</p></div>
                  </Modal>
               </div>
            </div>
         </>
      )
   }
}