import './style.css';
import Helper from './helpers.js';

const helper = new Helper();

window.addEventListener('DOMContentLoaded', () => {
  helper.display();
  document.querySelector('form').addEventListener('submit', (e) => helper.formHandler(e));
  document.querySelector('.enter').addEventListener('click', (e) => helper.formHandler(e));
});