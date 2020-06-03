import { ua, en, ro } from 'helpers/languages';

let lang = localStorage.getItem('lang');
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

export default langObj;