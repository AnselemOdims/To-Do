/* eslint-disable class-methods-use-this */
import Utils from './utils.js';

const utils = new Utils();

export default class Helper {
  /**
   * @function formHandler - instance method for handling of form submission
   */
  formHandler(e) {
    e.preventDefault();
    utils.add();
    document.querySelector('.todo-list ul').innerHTML = '';
    document.querySelector('.todo-list ul').insertAdjacentHTML('beforeend', utils.render());
    utils.clear();
  }
}