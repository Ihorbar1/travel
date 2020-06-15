import React from 'react';
import s from './styles.module.css'

export default class extends React.Component {

   render() {
      return (
         <>
            <section className={s.main}>
               <h1>{this.props.text}</h1>
            </section>
         </>
      )
   }
}