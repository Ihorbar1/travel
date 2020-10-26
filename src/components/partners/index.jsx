import React from 'react';
import langCheaker from '../../helpers/languages/langChanges'
import s from './styles.module.css'
import partner1 from '../../assets/img/buko.svg'
import partner2 from '../../assets/img/mygovo.svg'
import partner3 from '../../assets/img/dolyna.svg'
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
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner1} alt="" />
               </a>
               <a href="http://migovo.com.ua/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner2} alt="" />
               </a>
               <a href="https://www.soniachna-dolina.com/?gclid=CjwKCAjwrKr8BRB_EiwA7eFapvW9NGSjvghqzfe7Z6iMZBdVJJtQUzN408bHYl8uvnz_MTzl1r0vABoCVQIQAvD_BwE" target="_blank" rel="noopener" className={s.elem}>
                  <img src={partner3} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner4} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner5} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner6} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner7} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner8} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner9} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner10} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner11} alt="" />
               </a>
               <a href="https://bukovel.com/" target="_blank" rel="noopener noreferrer" className={s.elem}>
                  <img src={partner12} alt="" />
               </a>
            </div>
         </div>
      )
   }
}