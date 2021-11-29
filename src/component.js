/* eslint-disable class-methods-use-this */
export default class Component {
  static list(val, id) {
    return `
  <li class="list">
  <input type="checkbox" id="check" data-id=${id}><img src="check.svg" alt="checked icon" class="d-none" data-id=${id}>
  <input type="text" class="input-value" value='${val}'>
  <a><i class="fas fa-ellipsis-v"></i></a>
  <a class="d-none"  id="delete"><i class="far fa-trash-alt" data-id=${id}></i></a>
</li>
  `;
  }
}