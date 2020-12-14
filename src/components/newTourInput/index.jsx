import React from 'react';
import s from './styles.module.css'
import { TourInput } from './styles'

export default class extends React.Component {

   state = {
      validText: "",
      isValid: true
   }

   validation = (e, patern) => {
      let validText = "";

      if (patern === "num") {
         patern = /^[ 0-9]+$/;
         validText = "Можна вводити тільки числа"
      } else if (patern === "empty") {
         patern = /^[a-zа-яёіЇє 0-9 () /., - +=_*?:;%№$!"'|]+$/i;
         validText = ""
      } else {
         console.log("НЕПРАВИЛЬНО");
      }

      if (e.target.value === "") {
         this.setState({ validText: "" })
         this.props.changeValidationFlag(this.props.name, false)

      } else if (!e.target.value.match(patern)) {
         this.setState({ validText })
         this.props.changeValidationFlag(this.props.name, true)

      } else {
         this.setState({ validText: "" })
         this.props.changeValidationFlag(this.props.name, true)

      }

   }

   render() {

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