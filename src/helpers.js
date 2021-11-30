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
  display() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      const { description, index } = item;
      utils.render(description, index);
      document.querySelector('#todo').focus();
      this.checkHandler();
      this.handleFocus();
    });
    utils.load(tasks);
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

  /**
   *
   * @function changeHandler - handles the change on the checkbox
   * @param {Event Object} e - The current event
   */
  changeHandler(e) {
    const item = e.target;
    const parent = item.parentElement;
    const child = parent.children;
    utils.help('add', item, child[1], child[2]);
    child[1].addEventListener('click', () => {
      utils.help('rem', item, child[1], child[2]);
      item.checked = false;
    });
  }

  /**
   * @function handleFocus - This handles the focus on inputs
   */
  handleFocus() {
    document.querySelectorAll('li.list').forEach((item) => item.addEventListener('click', this.focusHandler));
  }

  /**
   * @function checkHandler - handles the checkbox change event
   */
  checkHandler() {
    document.querySelectorAll('input[type="checkbox"]').forEach((item) => item.addEventListener('change', this.changeHandler));
  }
}