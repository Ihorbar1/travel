import React from 'react';
import ReactDOM from "react-dom";
import axios from '../../lib/api'
import Modal from 'react-modal';
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import TourItem from '../../components/tours/tourItem/index'
import Footer from '../../components/footer/index'
import s from './styles.module.css'

export default class extends React.Component {
   state = {
      tours: [],
      showModal: false
   }

   getTours = () => {
      axios.get('/tours')
         .then((response) => {
            this.setState({ tours: response.data })
         })
         .catch((error) => {
            // handle error
            console.log(error);
         })

   }

   componentDidMount = () => {
      this.getTours()
   }

   handleOpenModal = () => {
      this.setState({ showModal: true });
   }
   handleCloseModal = () => {
      this.setState({ showModal: false });
   }


   render() {
      console.log(this.state.tours);

      return (
         <main>
            <Header />
            <Main />
            <section className={s.tour}>
               <h2>Тури</h2>
               <div className={s.items}>
                  {this.state.tours.map(tour => <TourItem key={tour.id} tour={tour.ukrainian}></TourItem>)}
               </div>
               <div onClick={this.handleOpenModal} className={s.nueTourBut}>+</div>
               <Modal
                  className={s.modal}
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example">
                  {Modal.setAppElement('#root')}
                  <div onClick={this.handleCloseModal} className={s.modalButton}>X</div>
                  <p className={s.modalInputText}>Тип подорожі</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Країна</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Курорт</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Виліт із</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Дата вильоту/виїзду</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Готель</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Ночей</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Харчування</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Страхування</p>
                  <input type="text" className={s.modalInput} />
                  <p className={s.modalInputText}>Ціна</p>
                  <input type="text" className={s.modalInput} />
                  <div className={s.modalButtonSend}><p>Відправити</p></div>
               </Modal>
            </section>
            <Footer />
         </main>
      )
   }
}