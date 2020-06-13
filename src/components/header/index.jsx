import React from 'react';
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import langCheaker from '../../helpers/languages/langChanges'
import Select from 'react-select';

// import styled from 'styled-components'
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

   // handleChange = selectedOption => {
   //    this.setState({ selectedOption });
   //    // console.log(`Option selected:`, selectedOption);
   // };

   changeHead = (e) => {
      let a = e.value;
      // console.log(a);

      localStorage.setItem('lang', a)
      this.props.changeHead(a)
   }

   logOut = () => {
      localStorage.setItem('role', '')
      this.setState({ role: 'none' })
   }

   render() {
      let lang = localStorage.getItem('lang')
      let role = localStorage.getItem('role')
      let langObj = langCheaker(lang);
      // const { selectedOption } = this.state;

      return (
         <>
            <header>
               <div className={s.wrap}>

                  <div className={s.logo}>
                     <Link to="/"><img src={img} alt="" /></Link>
                  </div>
                  <div className={s.menu}>
                     <ul>
                        <li><Link to="/">{langObj.menuMainPage}</Link></li>
                        <li><Link to="/tours">{langObj.menuToursPage}</Link></li>
                        <li><Link to="/services">{langObj.menuServicesPage}</Link></li>
                        <li><Link to="/contact">{langObj.menuContactPage}</Link></li>

                        {/* value={this.state.lang} */}

                        {/* <select name="" id="" onChange={(e) => this.changeHead(e)} value={lang}>
                           <option value="ua" >UA</option>
                           <option value="en" >EN</option>
                           <option value="ro" >RO</option>
                        </select> */}
                     </ul>
                     <Select
                        onChange={(e) => this.changeHead(e)}
                        options={options}
                        className={s.select}
                        defaultValue={lang === 'ua' ? options[0] : lang === 'en' ? options[1] : options[2]}
                     />
                     {/* defaultValue={'jjk'} */}
                     {role === 'admin' ? <button className={s.logOut} onClick={this.logOut}>Вихід</button> : ''}
                  </div>
               </div>
            </header>
         </>
      )
   }
}