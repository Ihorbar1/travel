import React from 'react';
import {
   Router,
   Route,
   Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Tours from './pages/tours/index';
import Main from './pages/main'
import Services from './pages/services'
import Contact from './pages/contact'
import Login from './pages/login'
import Feedback from './pages/feedback'
import Instruments from './pages/instruments'
import './styles.css'

const customHistory = createBrowserHistory();

export default class extends React.Component {

   render() {
      if (!localStorage.getItem('lang')) { localStorage.setItem('lang', "uk") }

      return (
         <>
            <Router history={customHistory}>
               <Switch>
                  <Route exact path="/"
                     render={() => <Main />}>
                  </Route>
                  <Route exact path="/tours"
                     render={() => <Tours />}>
                  </Route>
                  <Route exact path="/services"
                     render={() => <Services />}>
                  </Route>
                  <Route exact path="/contact"
                     render={() => <Contact />}>
                  </Route>
                  <Route exact path="/login"
                     render={() => <Login />}>
                  </Route>
                  <Route exact path="/feedback"
                     render={() => <Feedback />}>
                  </Route>
                  <Route exact path="/inst"
                     render={() => <Instruments />}>
                  </Route>
                  <Route exact path="*"
                     render={() => <p className="error404">404. this page was not found</p>}>
                  </Route>
               </Switch>
            </Router>
         </>
      )
   }
}