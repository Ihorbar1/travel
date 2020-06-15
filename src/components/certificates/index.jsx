import React from 'react';
import langCheaker from '../../helpers/languages/langChanges'
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

   render() {
      let lang = localStorage.getItem('lang');
      let langObj = langCheaker(lang);

      return (
         <div className={s.sert}>
            <h2>{langObj.certificateHeader}</h2>
            <div className={s.wrap}>
               <div className={s.item} >
                  <h3>{langObj.certificateElem1}</h3>
                  <SertModal img={img1} />
               </div>
               <div className={s.item}>
                  <h3>{langObj.certificateElem2}</h3>
                  <SertModal img={img2} />
               </div>
               <div className={s.item}>
                  <h3>{langObj.certificateElem3}</h3>
                  <SertModal img={img3} />
               </div>
               <div className={s.item}>
                  <h3>{langObj.certificateElem4}</h3>
                  <SertModal img={img4} />
               </div>
               <div className={s.itemDoc}>
                  <h3>{langObj.certificateElem5}</h3>
                  <a href={doc1} download ><img src={doc} alt="" /></a>

               </div>
               <div className={s.itemDoc}>
                  <h3>{langObj.certificateElem6}</h3>
                  <a href={doc2} download ><img src={doc} alt="" /></a>
               </div>
               <div className={s.itemDoc}>
                  <h3>{langObj.certificateElem7}</h3>
                  <a href={doc3} download ><img src={doc} alt="" /></a>
               </div>
            </div>
         </div>
      )
   }
}