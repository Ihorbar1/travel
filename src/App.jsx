import React from 'react';
// import ReactDOM from "react-dom";
import axios from './lib/api'
import {
   Router,
   Route,
   Switch,
   // Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Modal from 'react-modal';
import Tours from './pages/tours/index';
import Test from './components/test'
import Main from './pages/main'
import Contact from './pages/contact'
// import Header from './components/header/index'
import Login from './pages/login'
// import './reset.css'
import './styles.css'

const customHistory = createBrowserHistory();

export default class extends React.Component {
   state = {
      tours: [],
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


   render() {
      if (!localStorage.getItem('lang')) {
         localStorage.setItem('lang', "uk")
      }
      // Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.85)'
      // Modal.defaultStyles.overlay.zIndex = '9999'

      return (
         <>
            <Router history={customHistory}>
               <Switch>
                  <Route exact path="/"
                     render={() => <Main />}>
                  </Route>
                  <Route exact path="/tours"
                     render={() => <Tours key={localStorage.getItem('lang') + 1} />}>
                  </Route>
                  <Route exact path="/contact"
                     render={() => <Contact />}>
                  </Route>
                  <Route exact path="/login"
                     render={() => <Login />}>
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