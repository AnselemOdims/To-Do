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
}