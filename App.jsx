import React from 'react';
import ReactDOM from "react-dom";
import axios from './lib/api'
import {
   Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Tours from './pages/tours/index';
import Test from './components/test'
import Main from './pages/main'
import './styles.css'

const customHistory = createBrowserHistory();

export default class extends React.Component {
   state = {
      tours: []
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
      console.log(this.state.tours);

      return (
         <Router history={customHistory}>
            <Switch>
               <Route exact path="/tours"
                  render={() => <Tours />}>
               </Route>
               <Route exact path="/test"
                  render={() => <Test props={this.state.tours} />}>
               </Route>
               <Route exact path="/main"
                  render={() => <Main />}>
               </Route>
            </Switch>
         </Router>
      )
   }
}