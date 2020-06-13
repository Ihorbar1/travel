import React from 'react';
import axios from '../../lib/api'
// import { Link } from "react-router-dom";
// import logo from '../../assets/img/logo-coral-travel.svg'
// import {
//    Router,
//    Route,
//    Switch,
//    Redirect
// } from "react-router-dom";
// import { Redirect, Route, Switch } from "react-router";
// import { createBrowserHistory } from "history";
import s from './styles.module.css'
import { withRouter } from 'react-router-dom';

// let history = createBrowserHistory();

class Login extends React.Component {
   state = {
      login: '',
      password: ''
   }

   test = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }

   checkState = (e) => {
      if (!(this.state.login === '' || this.state.password === '')) {
         // console.log('true');
         e.preventDefault()
         this.sendUser()
         // props.history.push('/hadpageUrl')


      } else {
         console.log('false');
         e.preventDefault()
      }
   }

   sendUser = () => {
      axios.post('/api/login', this.state)
         .then((response) => {
            console.log(response);
            // console.log();
            localStorage.setItem('role', response.data.data.role)
            // return (<Redirect to="/tours" />);
            this.props.history.push("/");
            // this.setState({ some: 'some' })
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
export default withRouter(Login);