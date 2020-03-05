import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components'
import s from './test.module.css'

export default class extends React.Component {


   render() {
      return (
         <>
            <header>
               <div className={s.logo}></div>
               <div className={s.menu}>
                  <ul>
                     <li><a href="">portfolio</a></li>
                     <li><a href="">term</a></li>
                     <li><a href="">element</a></li>
                     <li><a href="">section</a></li>
                     <li><a href="">terra</a></li>
                  </ul>
               </div>
            </header>
         </>
      )
   }
}