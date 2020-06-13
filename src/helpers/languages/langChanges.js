import { ua, en, ro } from 'helpers/languages';

// let lang = localStorage.getItem('lang');
const langCheaker = (lang) => {

   let langObj;
   switch (lang) {
      case 'en':
         langObj = en;
         break;
      case 'ro':
         langObj = ro;
         break;
      default:
         langObj = ua;
   }
   return langObj
}

export default langCheaker;