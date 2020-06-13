import React from 'react';
// import { ua, en, ro } from 'helpers/languages';
import langCheaker from '../../helpers/languages/langChanges'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
import s from './styles.module.css'

class Services extends React.Component {


   changeHead = (lang) => {
      this.setState({ lang: lang })
   }

   render() {
      let lang = localStorage.getItem('lang')
      let langObj = langCheaker(lang);
      return (
         <>
            <Header changeHead={this.changeHead} />
            <Main text={langObj.servicesHeader} />
            <div className={`${s.elem} ${s.elem1}`}>
               <h2>{langObj.elem1Header}</h2>
               <p>{langObj.elem1Text1}</p>
            </div>
            <div className={`${s.elem} ${s.elem2}`}>
               <h2>{langObj.elem2Header}</h2>
               <p>{langObj.elem2Text1}</p>
               <p>{langObj.elem2Text2}</p>

            </div>
            <div className={`${s.elem} ${s.elem1}`}>
               <h2>{langObj.elem3Header}</h2>
               <p>{langObj.elem3Text1}</p>
               <h3>{langObj.elem3Text2}</h3>
               <p>{langObj.elem3Text3}</p>
            </div>

            <Footer />
         </>
      )
   }
}

export default Services;