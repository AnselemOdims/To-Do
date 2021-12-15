export default class Drag {
  /**
   * @static
   * @function dragStartEnd
   * @memberof Drag
   */
  static dragStartEnd() {
    document.querySelectorAll('li.list').forEach((item) => {
      item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
      });
      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });
  }
}