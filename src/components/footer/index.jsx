import React from 'react';
import langCheaker from '../../helpers/languages/langChanges'
import './styles.module.css';

export default class extends React.Component {


   render() {
      let lang = localStorage.getItem('lang')
      let langObj = langCheaker(lang);
      return (
         <>
            <footer>
               <p>{langObj.footer}</p>
            </footer>
         </>
      )
   }
}