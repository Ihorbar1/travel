import React from 'react';
// import ReactDOM from "react-dom";
import axios from './lib/api'
import {
   Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
// import Modal from 'react-modal';
import Tours from './pages/tours/index';
import Test from './components/test'
import Main from './pages/main'
import Services from './pages/services'
import Contact from './pages/contact'
// import Header from './components/header/index'
import Login from './pages/login'
// import './reset.css'
import './styles.css'

const customHistory = createBrowserHistory();

export default class extends React.Component {
   state = {
      tours: [],
      // role: 'admin',
   }

   getTours = () => {
      axios.get('/tours')
         .then((response) => {
            this.setState({ tours: response.data })
         })
         .catch((error) => {
            // handle error
            console.log(error);
         })

   }

   componentDidMount = () => {
      this.getTours()
   }

   checkRole = (role) => { this.setState({ role: role }) }


   render() {
      if (!localStorage.getItem('lang')) {
         localStorage.setItem('lang', "uk")
      }
      console.log(this.state.role);

      // Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.85)'
      // Modal.defaultStyles.overlay.zIndex = '9999'
      const role = localStorage.getItem('role')

      return (
         <>
            <Router history={customHistory}>
               <Switch>
                  <Route exact path="/"
                     render={() => <Main />}>
                  </Route>
                  <Route exact path="/tours"
                     render={() => <Tours role={role} />}>
                  </Route>
                  <Route exact path="/services"
                     render={() => <Services />}>
                  </Route>
                  <Route exact path="/contact"
                     render={() => <Contact />}>
                  </Route>
                  <Route exact path="/login"
                     render={() => <Login checkRole={this.checkRole} />}>
                  </Route>
                  <Route exact path="/test"
                     render={() => <Test props={this.state.tours} />}>
                  </Route>
               </Switch>
            </Router>
         </>
      )
   }
}