import React from 'react';
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import s from './styles.module.css'
import SertModal from '../sertModal/index'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import doc from './doc.png'



export default class extends React.Component {

   // createItem = () => {
   //    return imgArr.map(item => {
   //       return (
   //          <>
   //             <img src={item} alt="" onClick={this.handleOpenModal} />
   //             <SertModal showModal={this.state.showModal} img={item} handleCloseModal={this.handleCloseModal} />
   //          </>
   //       )
   //    })
   // }

   render() {


      return (
         <div className={s.sert}>
            <h2>Сертифікати</h2>
            <div className={s.wrap}>
               <div className={s.item} >
                  <h3>Банківська гарантія</h3>
                  <SertModal img={img1} />
               </div>
               <div className={s.item}>
                  <h3>Виписка (зразок)</h3>
                  <SertModal img={img2} />
               </div>
               <div className={s.item}>
                  <h3>Книга відгуків і пропозицій (зразок)</h3>
                  <SertModal img={img3} />
               </div>
               <div className={s.item}>
                  <h3>Ліцензія зразок</h3>
                  <SertModal img={img4} />
               </div>
               <div className={s.itemDoc}>
                  <h3>Закон України про захист прав споживачів</h3>
                  <img src={doc} alt="" />
               </div>
               <div className={s.itemDoc}>
                  <h3>Закон України про туризм</h3>
                  <img src={doc} alt="" />
               </div>
               <div className={s.itemDoc}>
                  <h3>Про затвердження Ліцензійних умов провадження туроператорської діяльності</h3>
                  <img src={doc} alt="" />
               </div>
            </div>
         </div>
      )
   }
}