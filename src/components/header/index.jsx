import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components'
import s from './test.module.css'
import img from '../../assets/img/logo-coral-travel.svg'

export default class extends React.Component {

   changeHead = (e) => {
      let a = e.target.value;
      localStorage.setItem('lang', a)
      this.props.changeHead(a)
   }

   render() {
      return (
         <>
            <header>
               <div className={s.wrap}>

                  <div className={s.logo}>
                     <img src={img} alt="" />
                  </div>
                  <div className={s.menu}>
                     <ul>
                        <li><a href="http://localhost:3000/main">Головна</a></li>
                        <li><a href="http://localhost:3000/tours">Тури</a></li>
                        <li><a href="">Послуги</a></li>
                        <li><a href="http://localhost:3000/contact">Контакти</a></li>
                        <select name="" id="" onChange={(e) => this.changeHead(e)}>
                           <option value="ua" >UA</option>
                           <option value="en" >EN</option>
                           <option value="ro" >RO</option>
                        </select>
                     </ul>
                  </div>
               </div>
            </header>
         </>
      )
   }
}