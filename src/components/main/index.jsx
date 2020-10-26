import React from 'react';
import s from './styles.module.css'

export default class extends React.Component {

   render() {
      return (
         <>
            <section className={s.main}>
               <div className={s.wrap}>

                  <h1>{this.props.text}</h1>
               </div>
            </section>
         </>
      )
   }
}