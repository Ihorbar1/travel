import React from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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
      let nueLang = localStorage.getItem('lang')

      return (
         <>
            <header>
               <div className={s.wrap}>

                  <div className={s.logo}>
                     <Link to="/"><img src={img} alt="" /></Link>
                  </div>
                  <div className={s.menu}>
                     <ul>
                        <li><Link to="/">Головна</Link></li>
                        <li><Link to="/tours">Тури</Link></li>
                        <li><a href="">Послуги</a></li>
                        <li><Link to="/contact">Контакти</Link></li>
                        <select name="" id="" onChange={(e) => this.changeHead(e)} value={nueLang}>
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