import './style.css';
import Helper from './helpers.js';
import Utils from './utils.js';

const helper = new Helper();
const utils = new Utils();

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.todo-list ul').innerHTML = utils.render();
  document.querySelector('form').addEventListener('submit', () => helper.formHandler());
  document.querySelector('.enter').addEventListener('click', () => helper.formHandler());
});