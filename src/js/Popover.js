export default class Popover {
  constructor(forElem) {
    this.titleText = 'Заголовок';
    this.paragText = 'Текст параграфа';
    this.forElem = forElem;

    this.forElem.addEventListener('click', () => {
      this.render();
    });
  }

  generatePop() {
    const title = document.createElement('h2');
    title.classList.add('title_popover');
    title.innerText = this.titleText;

    const parag = document.createElement('p');
    parag.classList.add('parag_popover');
    parag.innerText = this.paragText;

    this.pop = document.createElement('div');
    this.pop.classList.add('popover');
    this.pop.appendChild(title);
    this.pop.appendChild(parag);
    return this.pop;
  }

  render() {
    if (this.forElem.previousSibling) {
      this.forElem.previousSibling.remove();
    } else {
      this.forElem.before(this.generatePop());
      this.pop.style.top = `${this.forElem.offsetTop - this.forElem.offsetHeight * 2 - 10}px`;
      this.pop.style.left = `${this.forElem.offsetLeft + this.forElem.offsetWidth / 2 - this.pop.offsetWidth / 2}px`;
    }
  }
}
