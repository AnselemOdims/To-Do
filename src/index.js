import './style.css';
import Helper from './helpers.js';
import Utils from './utils.js';
import Drag from './drag.js';
import featDisplay from './features.js'

window.addEventListener('DOMContentLoaded', () => {
  Helper.display();
  Drag.dragFunc();
  document.querySelector('form').addEventListener('submit', (e) => Helper.formHandler(e));
  document.querySelector('.enter').addEventListener('click', (e) => Helper.formHandler(e));
  document.querySelector('.clear a').addEventListener('click', () => Utils.clearAll());
  document.querySelector('#refresh .fas').addEventListener('click', (e) => {
    e.target.classList.add('rotate');
    setTimeout(() => { e.target.classList.remove('rotate'); }, 1000);
  });
  featDisplay();
});
