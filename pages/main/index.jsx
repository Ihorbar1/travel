import React from 'react';
import ReactDOM from "react-dom";
import s from './styles.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Partners from '../../components/partners/index'
import Certificates from '../../components/certificates/index'

export default class extends React.Component {

   render() {
      return (
         <>
            <Header changeHead={this.props.changeHead} />
            <div className={s.mainElem}> <span><p>Туристичні послуги</p></span> </div>
            <Partners />
            <Certificates />
            <Footer />
         </>
      )
   }
}