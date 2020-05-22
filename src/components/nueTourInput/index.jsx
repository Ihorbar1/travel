import React from 'react';
import ReactDOM from "react-dom";
import s from './styles.module.css'
import { TourInput } from './styles'

export default class extends React.Component {

   state = {
      validText: "",
      isValid: true
   }

   validation = (e, patern) => {
      let validText = "";

      if (patern == "num") {
         patern = /^[ 0-9]+$/;
         validText = "Можна вводити тільки числа"
      } else if (patern == "empty") {
         patern = /^[a-zа-яёі]+$/i;
         validText = "Можна вводити тільки текст"
      } else {
         console.log("НЕПРАВИЛЬНО");
      }

      if (!e.target.value.match(patern)) {
         this.setState({ validText })
      } else {
         validText = "";
         this.setState({ validText })
      }

      if (e.target.value == "") {
         this.setState({ validText: "" })
      }
   }

   // nulValidation = () => {
   //    if (this.props.checkValidation) {
   //       this.setState({ isValid: this.props.isFormValid })
   //    }
   // }


   render() {
      // console.log(this.props.isValid);
      // { this.nulValidation() }

      return (
         <>
            <TourInput type={this.props.type}
               className={s.modalInput}
               name={this.props.name}
               onChange={this.props.createTour}
               onBlur={(e) => this.validation(e, this.props.patern)}
               isValid={this.props.isFormValid}
               checkValidation={this.props.checkValidation}
            />

            <p className={s.validText}>{this.state.validText}</p>
         </>
      )
   }
}