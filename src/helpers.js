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

  /**
   * @function focusHandler - handles the focus on the inputs
   * @param {Event Object} e - The current event
   */
  focusHandler(e) {
    const item = e.currentTarget;
    const child = item.children;
    if (document.querySelector('li.list.focus')) {
      const parent = document.querySelector('li.list.focus');
      parent.children[2].classList.remove('focus');
      parent.children[3].classList.remove('d-none');
      parent.children[4].classList.add('d-none');
      parent.classList.remove('focus');
    }
    child[2].focus();
    utils.tog('add', 'focus', child[2]);
    utils.tog('add', 'd-none', child[3]);
    utils.tog('rem', 'd-none', child[4]);
    item.classList.add('focus');
  }
}