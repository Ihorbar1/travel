import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components'
import s from './test.module.css'
import img from '../../assets/img/logo-coral-travel.svg'

export default class extends React.Component {


   render() {
      return (
         <>
            <header>
               <div className={s.logo}>
                  <img src={img} alt="" />
               </div>
               <div className={s.menu}>
                  <ul>
                     <li><a href="http://localhost:3000/main">Головна</a></li>
                     <li><a href="http://localhost:3000/tours">Тури</a></li>
                     <li><a href="">Послуги</a></li>
                     <li><a href="">Контакти</a></li>
                     {/* <li><a href="">terra</a></li> */}
                  </ul>
               </div>
            </header>
         </>
      )
   }
}