import React from 'react';
import langCheaker from '../../helpers/languages/langChanges'
import s from './styles.module.css'
import partner1 from '../../assets/img/similio-seeklogo.com.svg'
import partner2 from '../../assets/img/semantic-web.svg'
import partner3 from '../../assets/img/svelte.svg'
import partner4 from '../../assets/img/chromatic.svg'
import partner5 from '../../assets/img/apigee.svg'
import partner6 from '../../assets/img/akamai.svg'
import partner7 from '../../assets/img/algolia.svg'
import partner8 from '../../assets/img/appsignal.svg'
import partner9 from '../../assets/img/bitrise.svg'
import partner10 from '../../assets/img/brandfolder.svg'
import partner11 from '../../assets/img/behance.svg'
import partner12 from '../../assets/img/arangodb.svg'

export default class extends React.Component {
   render() {
      let lang = localStorage.getItem('lang');
      let langObj = langCheaker(lang);
      return (
         <div className={s.part}>
            <h2>{langObj.partnersHeader}</h2>
            <div className={s.wrap}>
               <div className={s.elem}>
                  <img src={partner1} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner2} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner3} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner4} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner5} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner6} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner7} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner8} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner9} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner10} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner11} alt="" />
               </div>
               <div className={s.elem}>
                  <img src={partner12} alt="" />
               </div>
            </div>
         </div>
      )
   }
}