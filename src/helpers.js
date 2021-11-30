/* eslint-disable class-methods-use-this */
import Utils from './utils.js';

export default class Helper {
  /**
   * @function formHandler - instance method for handling of form submission
   */
  static formHandler(e) {
    e.preventDefault();
    Utils.addLocal();
    Utils.clear();
    Helper.checkHandler();
    Helper.handleFocus();
  }

  /**
   * @function display - this helps to display the list on load
   */
  static display() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      const { description, index } = item;
      Utils.render(description, index);
      document.querySelector('#todo').focus();
      Helper.checkHandler();
      Helper.handleFocus();
    });
    Utils.load(tasks);
    Utils.edit();
  }

  /**
   * @function focusHandler - handles the focus on the inputs
   * @param {Event Object} e - The current event
   */
  static focusHandler(e) {
    const item = e.currentTarget;
    const child = item.children;
    const input = child[2].firstElementChild;
    if (document.querySelector('li.list.focus')) {
      const parent = document.querySelector('li.list.focus');
      parent.children[2].firstElementChild.classList.remove('focus');
      parent.children[3].classList.remove('d-none');
      parent.children[4].classList.add('d-none');
      parent.classList.remove('focus');
    }
    input.focus();
    Utils.togClass('add', 'focus', input);
    Utils.togClass('add', 'd-none', child[3]);
    Utils.togClass('rem', 'd-none', child[4]);
    item.classList.add('focus');
    item.querySelector('#delete .far').addEventListener('click', (e) => Utils.remove(e, e.currentTarget.dataset.id));
  }

  /**
   *
   * @function changeHandler - handles the change on the checkbox
   * @param {Event Object} e - The current event
   */
  static changeHandler(e) {
    const item = e.target;
    const parent = item.parentElement;
    const child = parent.children;
    Utils.help('add', item, child[1], child[2].firstElementChild);
    child[1].addEventListener('click', (e) => {
      Utils.help('rem', item, child[1], child[2].firstElementChild);
      item.checked = false;
    });
  }

  /**
   * @function handleFocus - This handles the focus on inputs
   */
  static handleFocus() {
    document.querySelectorAll('li.list').forEach((item) => item.addEventListener('click', Helper.focusHandler));
  }

  /**
   * @function checkHandler - handles the checkbox change event
   */
  static checkHandler() {
    document.querySelectorAll('input[type="checkbox"]').forEach((item) => item.addEventListener('change', Helper.changeHandler));
  }
}