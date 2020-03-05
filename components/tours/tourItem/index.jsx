import React from 'react';
import ReactDOM from "react-dom";
import s from './styles.module.css';

export default class extends React.Component {

   foo = () => {
      let res = []
      this.props.tour.map(item => {

         Object.keys(item).map(item => {

            Object.keys(item).map(item => {
               // console.log(item);
            })

            return res.push(item)
         });
      })

      return res;

   }

   render() {
      console.log(this.foo());


      return (
         <>
            <div className={s.item}>
               {/* <img src="" alt=""/> */}
               <div className={s.text}>
                  <p>{this.props.tour[0].typeOfTravel.name}</p>
                  <p>{this.props.tour[0].typeOfTravel.value}</p>
               </div>
            </div>
         </>
      )
   }
}