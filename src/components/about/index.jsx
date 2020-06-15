import React from 'react'
import s from './styles.module.css'
import langCheaker from '../../helpers/languages/langChanges'
import img1 from '../../assets/img/business.jpeg'

class About extends React.Component {

   render() {
      let lang = localStorage.getItem('lang')
      let langObj = langCheaker(lang);
      return (
         <>
            <div className={s.wrap}>
               <h2>{langObj.aboutHeader}</h2>
               <div className={s.container}>

                  <div className={s.about_img}>
                     <img src={img1} alt="" />
                  </div>
                  <div className={s.about_text}>
                     {langObj.aboutText1}<br />
                     <br />
                     {langObj.aboutText2}<br />
                     <br />
                     {langObj.aboutText3}
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default About
