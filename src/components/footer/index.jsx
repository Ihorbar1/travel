import React from 'react';
// import ReactDOM from "react-dom";
import { ua, en, ro } from 'helpers/languages';
import './styles.module.css';

export default class extends React.Component {


   render() {
      let Lang = localStorage.getItem('lang')
      let langObj;
      switch (Lang) {
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
            <footer>
               <p>{langObj.footer}</p>
            </footer>
         </>
      )
   }
}