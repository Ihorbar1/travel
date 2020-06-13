import React from 'react';
import s from './styles.module.css'

export default class extends React.Component {


   render() {

      return (
         <>
            <div className={s.loader}>Loading...</div>
         </>
      )
   }
}