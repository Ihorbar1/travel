import React from 'react'
import langCheaker from '../../helpers/languages/langChanges'
import Modal from 'react-modal'
import axios from '../../lib/api'
import s from './styles.module.css'



class FeedbackModal extends React.Component {
   state = {
      email: '',
      name: '',
      description: '',
      validationModal: '',
   }
   createFeedbackData = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   }

   validateFeedbackData = (e) => {
      const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.state.email.match(regEmail)) {
         this.setState({ validationModal: 'email' })
      } else {
         this.setState({ validationModal: '' })
         this.sendFeedback(e)
      }
   }

   sendFeedback = (e) => {
      // const data = { email: this.state.email, name: this.state.name, description: this.state.description };
      // e.preventDefault();
      // axios.post('/api/create-feedback', data)
      //    .then((response) => {
      //       this.props.getFeedback();
      //       this.props.handleCloseModal();
      //       console.log(response);
      //    })
      //    .catch((error) => {
      //       console.log(error);
      //       this.setState({ validationModal: 'error' })
      //    })
      this.props.updateFeedbackList({ name: this.state.name, description: this.state.description, id: Math.random() * (10000 - 2) + 2 })
      this.props.handleCloseModal();
   }

   createErrorNotification = (lang) => {
      if (this.state.validationModal === 'email') {
         if (lang == 'ro') {
            return (<p>E-mail introdus incorect</p>)
         } else if (lang == 'en') {
            return (<p>Incorrectly entered email</p>)
         } else {
            return (<p>Некоректно введений емейл</p>)
         }
      } else if (this.state.validationModal === 'error') {
         if (lang == 'ro') {
            return (<p>Crearea recenziei nu a reușit</p>)
         } else if (lang == 'en') {
            return (<p>Failed to create review</p>)
         } else {
            return (<p>Не вдалось створити відгук</p>)
         }
      } else {

      }
   }


   render() {
      let lang = localStorage.getItem('lang');
      let langObj = langCheaker(lang);

      return (<>
         <Modal
            className={s.modal}
            isOpen={this.props.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.props.handleCloseModal}
         >
            {this.createErrorNotification(lang)}
            {Modal.setAppElement('#root')}
            <div onClick={this.props.handleCloseModal} className={s.modalButton}>X</div>

            <p>Email</p>
            <input className={s.modalInput} type="text" name="email" onChange={(e) => this.createFeedbackData(e)} />
            <p>{langObj.name}</p>
            <input className={s.modalInput} type="text" name="name" onChange={(e) => this.createFeedbackData(e)} />
            <p>{langObj.description}</p>
            <textarea className={s.modalInput} cols="30" rows="8" name="description" onChange={(e) => this.createFeedbackData(e)}></textarea>
            <div className={s.modalButtonSend} onClick={this.validateFeedbackData}><p>{langObj.sendBtn}</p></div>
         </Modal>
      </>)
   }
}

export default FeedbackModal;