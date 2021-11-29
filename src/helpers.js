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
    utils.clear();
    this.checkHandler();
    this.handleFocus();
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

  /**
   *
   * @function changeHandler - handles the change on the checkbox
   * @param {Event Object} e - The current event
   */
  changeHandler(e) {
    const item = e.target;
    const parent = item.parentElement;
    const child = parent.children;
    utils.tog('add', 'd-none', item);
    utils.tog('add', 'strike', child[2]);
    utils.tog('rem', 'd-none', child[1]);
    utils.change(item.dataset.id, true);
    child[1].addEventListener('click', (e) => {
      utils.tog('rem', 'strike', child[2]);
      utils.tog('add', 'd-none', e.target);
      utils.tog('rem', 'd-none', item);
      item.checked = false;
      utils.change(item.dataset.id, false);
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