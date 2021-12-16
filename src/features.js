import check from './images/icons/check.svg';

export default function featDisplay() {
  document.querySelector('.features ul').innerHTML = `
    <li><img src=${check}> Add Todo to list</li>
    <li><img src=${check}> Edit Todo</li>
    <li><img src=${check}> Mark as completed</li>
    <li><img src=${check}> Drag and drop to reorder list</li>
    <li><img src=${check}> Clear all completed</li>
  `;
}