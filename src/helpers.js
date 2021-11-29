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

  /**
   * @function display - this helps to display the list on load
   */
  display() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      const { description, index } = item;
      utils.render(description, index);
      document.querySelector('#todo').focus();
      this.checkHandler();
    });
  }
}