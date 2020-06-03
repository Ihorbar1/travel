import React from 'react';
// import ReactDOM from "react-dom";
import { ua, en, ro } from 'helpers/languages';
import s from './styles.module.css'

export default class extends React.Component {
   render() {
      let lang = localStorage.getItem('lang');
      let langObj;
      switch (lang) {
         case 'en':
            langObj = en;
            break;
         case 'ro':
            langObj = ro;
            break;
         default:
            langObj = ua;
      }
      return (
         <div className={s.part}>
            <h2>{langObj.partnersHeader}</h2>
            <div className={s.wrap}>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
               <div className={s.elem}></div>
            </div>
         </div>
      )
   }
}