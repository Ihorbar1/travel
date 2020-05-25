import React from 'react';
// import ReactDOM from "react-dom";
// import Modal from 'react-modal';
import s from './styles.module.css'
import SertModal from '../sertModal/index'
import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'
import img4 from '../../assets/img/4.jpg'
import doc from '../../assets/img/doc.png'
import doc1 from '../../assets/files/Закон_України_про_захист_прав_споживачів.doc'
import doc2 from '../../assets/files/Закон_України_Про_туризм.doc'
import doc3 from '../../assets/files/Про_затвердження_Ліцензійних_умов провадження_туроператорської_діяльності.doc'



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
                  <h3>Ліцензія (зразок)</h3>
                  <SertModal img={img4} />
               </div>
               <div className={s.itemDoc}>
                  <h3>Закон України про захист прав споживачів</h3>
                  <a href={doc1} download ><img src={doc} alt="" /></a>

               </div>
               <div className={s.itemDoc}>
                  <h3>Закон України про туризм</h3>
                  <a href={doc2} download ><img src={doc} alt="" /></a>
               </div>
               <div className={s.itemDoc}>
                  <h3>Про затвердження Ліцензійних умов провадження туроператорської діяльності</h3>
                  <a href={doc3} download ><img src={doc} alt="" /></a>
               </div>
            </div>
         </div>
      )
   }
}