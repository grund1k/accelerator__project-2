import {iosVhFix} from './utils/ios-vh-fix';
import './modules/accordion';
import './modules/telephone-mask';
import {addValidationListeners} from './modules/form';
import {setSmoothsScroll} from './modules/smooth-scroll';
import './modules/modal';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  addValidationListeners();
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  setSmoothsScroll(smoothLinks);
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
  });
});

