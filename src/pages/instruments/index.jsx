import React from 'react'
import Header from '../../components/header/index'
import Main from '../../components/main/index'
import Footer from '../../components/footer/index'
import s from './styles.module.css'

class Instruments extends React.Component {

   changeHead = (lang) => this.setState({ lang: lang });

   render() {
      return (<>
         <Header changeHead={this.changeHead} />
         <Main text={'Інструменти'} />

         <div className={s.conteiner}>
            <h2>Інструменти</h2>
            <div className={s.infoWrap}>
               <div className={s.infoElem}>
                  <h3>Ліга закон</h3>
                  <a href="https://www.ligazakon.ua/ua/" target="_blank" rel="noopener noreferrer">Посилання на офіційний сайт</a>
                  <p>ЛІГА:ЗАКОН – інноваційна українська компанія, яка 25 років здійснює повноцінну правову підтримку бізнесу, влади, суспільства. Найбільший в країні розробник інформаційно-правових та сервісних рішень.</p>
               </div>
               <div className={s.infoElem}>
                  <h3>1С:Підприємство</h3>
                  <a href="http://1c.ua/v8/" target="_blank" rel="noopener noreferrer">Посилання на офіційний сайт</a>
                  <p>Система програм "1С: Підприємство 8" включає в себе платформу і прикладні рішення, розроблені на її основі, для автоматизації діяльності організацій і приватних осіб. Сама платформа не є програмним продуктом для використання кінцевими користувачами, які зазвичай працюють з одним з багатьох прикладних рішень (конфігурацій), розроблених на даній платформі. Такий підхід дозволяє автоматизувати різні види діяльності, використовуючи єдину технологічну платформу.</p>
               </div>
               <div className={s.infoElem}>
                  <h3>Project Expert</h3>
                  <a href="https://www.expert-systems.com/financial/pe/" target="_blank" rel="noopener noreferrer">Посилання на офіційний сайт</a>
                  <p>Аналітична система Project Expert - програма, що дозволяє «прожити» плановані інвестиційні рішення без втрати фінансових коштів, надати необхідну фінансову звітність потенційним інвесторам і кредиторам, обґрунтувати для них ефективність участі в проекті.

Незамінний для створення і вибору оптимального плану розвитку бізнесу, опрацювання фінансової частини бізнес-плану, оцінки інвестиційних проектів.</p>
               </div>
            </div>
         </div>

         <Footer />
      </>)
   }
}

export default Instruments;
