import React from 'react';
// import ReactDOM from "react-dom";
import s from './styles.module.css'

export default class extends React.Component {
   render() {
      return (
         <div className={s.part}>
            <h2>Наші партнери</h2>
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