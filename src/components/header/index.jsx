import React from 'react';
import { Link } from "react-router-dom";
import langCheaker from '../../helpers/languages/langChanges'
import Select from 'react-select';
import s from './styles.module.css'
import img from 'assets/img/logo-coral-travel.svg'

const options = [
   { value: 'ua', label: 'Українська' },
   { value: 'en', label: 'English' },
   { value: 'ro', label: 'Română' },
];


export default class extends React.Component {

   state = {
      lang: localStorage.getItem('lang'),
   };

   changeHead = (e) => {
      let a = e.value;
      localStorage.setItem('lang', a)
      this.props.changeHead(a)
   }

   logOut = () => {
      localStorage.setItem('role', '')
      this.setState({ role: 'none' })
      this.props.changeHead('ua')
   }

   render() {
      let lang = localStorage.getItem('lang')
      let role = localStorage.getItem('role')
      let langObj = langCheaker(lang);

      return (
         <>
            <header>
               <div className={s.wrap}>

                  <div className={s.logo}>
                     <Link className={s.logoText} to="/">ЧТЕІ-ТУР</Link>
                  </div>
                  <div className={s.menu}>
                     <ul>
                        <li><Link to="/">{langObj.menuMainPage}</Link></li>
                        <li><Link to="/tours">{langObj.menuToursPage}</Link></li>
                        <li><Link to="/services">{langObj.menuServicesPage}</Link></li>
                        <li><Link to="/feedback">{langObj.menuFeedbackPage}</Link></li>
                        <li><Link to="/contact">{langObj.menuContactPage}</Link></li>
                     </ul>
                     <Select
                        onChange={(e) => this.changeHead(e)}
                        options={options}
                        className={s.select}
                        defaultValue={lang === 'en' ? options[1] : lang === 'ro' ? options[2] : options[0]}
                     />
                     {role === 'admin' ? <button className={s.logOut} onClick={this.logOut}>Вихід</button> : ''}
                  </div>
               </div>
            </header>
         </>
      )
   }
}