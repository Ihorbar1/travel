import React from 'react';
// import ReactDOM from "react-dom";
import Modal from 'react-modal';
import s from './styles.module.css'

export default class extends React.Component {

   state = {
      showModal: false
   }

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }

   handleCloseModal = () => {
      this.setState({ showModal: false });
   }


   render() {
      return (
         <>
            <img src={this.props.img} alt="" onClick={this.handleOpenModal} />
            <Modal
               className={s.modal}
               isOpen={this.state.showModal}
               onRequestClose={this.handleCloseModal}
            >
               {Modal.setAppElement('#root')}
               <div onClick={this.handleCloseModal} className={s.modalButton}>X</div>
               <img src={this.props.img} alt="" />
            </Modal>
         </>
      )
   }
}