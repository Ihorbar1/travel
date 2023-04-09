import React from 'react';
import axios from '../../lib/api'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { error } from '../../helpers/notification'
import s from './styles.module.css'
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
   state = {
      login: '',
      password: ''
   }

   createUserInfo = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }

   checkState = (e) => {
      if (!(this.state.login === '' || this.state.password === '')) {
         e.preventDefault()
         this.sendUser()

      } else {
         console.log('false');
         e.preventDefault()
      }
   }

   sendUser = () => {
      localStorage.setItem('role', 'admin');
      this.props.history.push("/");
      // axios.post('/api/login', this.state)
      //    .then((response) => {
      //       console.log(response);
      //       localStorage.setItem('role', response.data.data.role)
      //       this.props.history.push("/");
      //    })
      //    .catch((error) => {
      //       console.log(error);
      //       this.createNotification(false)
      //    })

   }
   createNotification = (typeOfNotification) => {
      if (!typeOfNotification) {
         store.addNotification(
            {
               ...error,
               title: "Помилка",
               message: "Неправильний логін або пароль",
            })
      }
   }

   render() {
      return (
         <>
            <ReactNotification />
            <div className={s.wrap}>
               <div className={s.login}>
                  <form action="">
                     <p>Login</p>
                     <input type="text" name='login' onBlur={(e) => this.createUserInfo(e)} />
                     <p>Password</p>
                     <input type="password" name='password' onBlur={(e) => this.createUserInfo(e)} />
                     <input type="submit" value="Вхід" onClick={(e) => this.checkState(e)} />
                  </form>
               </div>
            </div>
         </>
      )
   }
}
export default withRouter(Login);