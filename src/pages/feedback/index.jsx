import React from 'react'
import langCheaker from '../../helpers/languages/langChanges'
import s from './styles.module.css'
import axios from '../../lib/api'
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import Footer from '../../components/footer/index'
import FeedbackModal from '../../components/feedbackModal'
import Spiner from '../../components/spiner'
import userIcon from '../../assets/img/user.svg'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'
import { success, error } from '../../helpers/notification'

class Feedback extends React.Component {
   state = {
      // descData: {},

      feedbackViewData: [
         {
            name: 'test',
            description: 'some text',
            id: 1,
         }
      ],
      showModal: false,
      load: true,
   }
   changeHead = (lang) => this.setState({ lang: lang });



   handleOpenModal = () => this.setState({ showModal: true });
   handleCloseModal = () => this.setState({ showModal: false });

   createNotification = (typeOfNotification, text) => {
      if (typeOfNotification) {
         store.addNotification(
            {
               ...success,
               title: "Успіх",
               message: text,
            })
      } else {
         store.addNotification(
            {
               ...error,
               title: "Помилка",
               message: text,
            })
      }
   }


   createSuccessNotificationInModal = () => this.createNotification(true, "Відгук успішно створено");



   getFeedback = (e) => {

      axios.get('/api/feedbacks')
         .then((response) => {
            console.log(response.data);
            this.setState({ feedbackViewData: response.data, load: false });

         })
         .catch((error) => {
            console.log(error);
         })

   }
   delFeedback = (id) => {

      let feedbackViewDataList = this.state.feedbackViewData;

      const index = feedbackViewDataList.findIndex(obj => obj.id === id);
      if (index !== -1) {
         feedbackViewDataList.splice(index, 1);
      }

      this.setState({ feedbackViewData: feedbackViewDataList })

      // axios.delete(`/api/delete-feedback/${id}`)
      //    .then((response) => {
      //       console.log(response);
      //       this.getFeedback();
      //       this.createNotification(true, "Відгук успішно видалено");
      //    })
      //    .catch((error) => {
      //       console.log(error);
      //       this.createNotification(false, "Невдалось видалити відгук");
      //    })

   }
   componentDidMount = () => {

      // this.getFeedback();

   }

   viewFeedback = () => {
      const role = localStorage.getItem('role')
      let feedbackViewData = this.state.feedbackViewData;
      // feedbackViewData = feedbackViewData.reverse();
      const view = feedbackViewData.map(item => {
         return (<div className={s.feedbackItem}>
            <div className={s.userInfo}>
               <img src={userIcon} alt="" />
               <p>{item.name}</p>
            </div>
            <div className={s.feedbackDescription}>{item.description}</div>
            {role == "admin" ? <button className={s.feedbackDelBtn} onClick={() => this.delFeedback(item.id)}>x</button> : ''}
         </div>)
      });
      return view;
   }

   updateFeedbackList = (item) => {
      const updatedList = [...this.state.feedbackViewData, item];
      this.setState({ feedbackViewData: updatedList });
   }



   render() {
      let lang = localStorage.getItem('lang');
      let langObj = langCheaker(lang);

      return (<>
         <ReactNotification />
         <Header changeHead={this.changeHead} />
         <Main text={langObj.feedbackHeader} />
         <div className={s.feedbackWrap}>
            <h2>{langObj.feedbackSecondHeader}</h2>
            <button className={s.openModal} onClick={this.handleOpenModal}>{langObj.modalOpenBtn}</button>
            <div className={s.feedbackConteiner}>
               { this.viewFeedback()}
            </div>
         </div>
         <Footer />
         <FeedbackModal
            updateFeedbackList={this.updateFeedbackList}
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            getFeedback={this.getFeedback}
            createSuccessNotificationInModal={this.createSuccessNotificationInModal}
         />

      </>)
   }
}

export default Feedback;