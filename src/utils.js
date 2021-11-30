/* eslint-disable class-methods-use-this */
import Component from './component.js';

export default class Utils {
  /**
   * @function render - instance class method
   * @returns - a list element formed from the component
   */
  render(val, id) {
    document.querySelector('.todo-list ul').insertAdjacentHTML('beforeend', Component.list(val, id));
  }

  /**
   * @function add - instance method that adds new todo to list
   */
  add() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const todo = document.querySelector('#todo').value;
    this.pushControl(tasks, todo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.render(todo, tasks.length);
  }

  /**
   * @function remove - The remove function to remove a list item
   * @param {Event Object} e - The event object
   * @param {*} id - The id of the item
   */
  static remove(e, id) {
    Utils.delete(id);
    e.currentTarget.closest('ul > li').remove();
    document.querySelector('.todo-list ul').innerHTML = '';
    Helper.display();
  }

  /**
   * @function add - instance method that clears input on add
   */
  clear() {
    document.querySelector('#todo').value = '';
  }

  /**
   * @function pushControl - helper method that pushes items into the tasks array
   * @param {Array} tasks - The array collection of objects
   * @param {String} todo - The todo description string
   */
  pushControl(tasks, todo) {
    tasks.push({
      description: `${todo}`,
      completed: false,
      index: tasks.length + 1,
    });
  }

  /**
   * @function change - Handles change in completed when checkbox is toggled
   * @param {String} id - The data id of the task
   * @param {Boolean} val - The value of completed
   */
  change(id, val) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const filtered = tasks.filter((item) => item.index !== parseInt(id, 10));
    const task = tasks.find((item) => item.index === parseInt(id, 10));
    task.completed = val;
    filtered.splice(task.index - 1, 0, task);
    localStorage.setItem('tasks', JSON.stringify(filtered));
  }

  /**
   * @function tog - instance method that toggles CSS class
   * @param  {...any} args - List of arguments
   * @returns the toggling
   */
  tog(...args) {
    if (args[0] === 'add') return args[2].classList.add(args[1]);
    return args[2].classList.remove(args[1]);
  }

  /**
   * @function help - Add and remove classes
   * @param {String} type - checks if add or remove
   * @param {HTML Element} val1 - the html element to add to or remove from
   * @param {HTML Element} val2 - the html element to add to or remove from
   * @param {HTML Element} val3 - the html element to add to or remove from
   */
  help(type, val1, val2, val3) {
    if (type === 'add') {
      this.tog('add', 'd-none', val1);
      this.tog('rem', 'd-none', val2);
      this.tog('add', 'strike', val3);
      this.change(val1.dataset.id, true);
    }
    if (type === 'rem') {
      this.tog('rem', 'd-none', val1);
      this.tog('add', 'd-none', val2);
      this.tog('rem', 'strike', val3);
      this.change(val1.dataset.id, false);
    }
  }

  /**
   * @function load - the load function
   * @param {Array} tasks - The tasks array
   */
  load(tasks) {
    document.querySelectorAll('li.list').forEach((elem) => {
      const task = tasks.find((item) => item.index === parseInt(elem.children[0].dataset.id, 10));
      if (task.completed) {
        const child = elem.children;
        this.help('add', child[0], child[1], child[2]);
        child[1].addEventListener('click', () => this.help('rem', child[0], child[1], child[2]));
      }
    });
  }

  /**
   * @function edit - Edits the todo and push changes to localStorage
   */
  static edit() {
    document.querySelectorAll('.list form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        Utils.change(e.target.dataset.id, e.target.firstElementChild.value);
      });
    });
  }

  /**
   * @function delete - Deletes an item(s) from the list
   * @param {any} val - A boolean or string
   */
  static delete(val) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    let remTasks;
    if (typeof val === 'string') {
      remTasks = tasks.filter((item) => item.index !== parseInt(val, 10));
    } else {
      remTasks = tasks.filter((item) => item.completed === val);
    }
    localStorage.removeItem('tasks');
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];
    remTasks.forEach((item) => {
      const { description, completed } = item;
      if (completed) {
        Utils.pushControl(todos, description, true);
      } else {
        Utils.pushControl(todos, description);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(todos));
  }
}