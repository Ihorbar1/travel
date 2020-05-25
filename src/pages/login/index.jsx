import React from 'react';
import ReactDOM from "react-dom";
import axios from '../../lib/api'
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo-coral-travel.svg'
import s from './styles.module.css'

export default class extends React.Component {
   state = {
      login: '',
      password: ''
   }

   test = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }

   checkState = (e) => {
      if (!(this.state.login == '' || this.state.password == '')) {
         console.log('true');

      } else {
         console.log('false');
         e.preventDefault()
      }
   }

   sendUser = () => {
      axios.post('/create-tour', this.state)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         })

   }

   render() {
      return (
         <>
            <div className={s.wrap}>
               {/* <Link to="/"><img className={s.logo} src={logo} alt="" /></Link> */}
               <div className={s.login}>
                  <form action="">
                     <p>Login</p>
                     <input type="text" name='login' onBlur={(e) => this.test(e)} />
                     <p>Password</p>
                     <input type="password" name='password' onBlur={(e) => this.test(e)} />
                     <input type="submit" onClick={(e) => this.checkState(e)} />
                  </form>
               </div>
            </div>
         </>
      )
   }
}