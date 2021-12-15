import './style.css';
import Helper from './helpers.js';
import Utils from './utils.js';

window.addEventListener('DOMContentLoaded', () => {
  Helper.display();
  document.querySelector('form').addEventListener('submit', (e) => Helper.formHandler(e));
  document.querySelector('.enter').addEventListener('click', (e) => Helper.formHandler(e));
  document.querySelector('.clear a').addEventListener('click', () => Utils.clearAll());
  document.querySelector('#refresh .fas').addEventListener('click', (e) => {
    e.target.classList.add('rotate');
    setTimeout(() => { e.target.classList.remove('rotate'); }, 1000);
  });
});
