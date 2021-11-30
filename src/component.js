/* eslint-disable class-methods-use-this */
import check from './images/icons/check.svg';

export default class Component {
  static list(val, id) {
    return `
    <li class="list" draggable="true">
    <input type="checkbox" id="check" data-id=${id}><img src=${check} alt="checked icon" class="d-none" data-id=${id}>
    <form data-id=${id}>
    <input type="text" class="input-value" value='${val}'>
    </form>
    <a><i class="fas fa-ellipsis-v drag"></i></a>
    <a class="d-none"  id="delete"><i class="far fa-trash-alt" data-id=${id}></i></a>
  </li>
  `;
  }
}