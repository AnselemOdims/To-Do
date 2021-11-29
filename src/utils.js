/* eslint-disable class-methods-use-this */
import task from './tasks.js';
import Component from './component.js';

export default class Utils {
  /**
   * @function render - instance class method
   * @returns - a list element formed from the component
   */
  render() {
    return task.map((item) => Component.list(item.description, item.index)).join('');
  }

  /**
   * @function add - instance method that adds new todo to list
   */
  add() {
    const todo = document.querySelector('#todo').value;
    task.push({
      description: `${todo}`,
      completed: false,
      index: task.length + 1,
    });
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
}