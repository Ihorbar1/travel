import React from 'react';
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ua, en, ro } from 'helpers/languages';
// import styled from 'styled-components'
import s from './styles.module.css'
import img from 'assets/img/logo-coral-travel.svg'

export default class extends React.Component {

   changeHead = (e) => {
      let a = e.target.value;
      localStorage.setItem('lang', a)
      this.props.changeHead(a)
   }

   render() {
      let nueLang = localStorage.getItem('lang')
      let langObj;
      switch (nueLang) {
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
         <>
            <header>
               <div className={s.wrap}>

                  <div className={s.logo}>
                     <Link to="/"><img src={img} alt="" /></Link>
                  </div>
                  <div className={s.menu}>
                     <ul>
                        <li><Link to="/">{langObj.menuMainPage}</Link></li>
                        <li><Link to="/tours">{langObj.menuToursPage}</Link></li>
                        {/* <li><a href="#">Послуги</a></li> */}
                        <li><Link to="/contact">{langObj.menuContactPage}</Link></li>
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