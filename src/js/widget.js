import isValidInn from './validators';

export default class InnFormWidget {
  constructor(parentEl) { // аргумент - элемент родителя
    // sв котором будет отрисовываться экземпляр виджета
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
            <form class="innogrn-form-widget">
                <div class="form-control">
                    <label for="innorgn-input">Введите ИНН/ОГРН</label>
                    <input type="text" id="innorgn-input" class="input">
                </div>
                <button class="submit">Далее</button>
            </form>
        `;
  }

  static get selector() {
    return '.innogrn-form-widget';
  }

  static get inputSelector() {
    return '.input';
  }

  static get submitSelector() {
    return '.submit';
  }

  bindToDOM() { // отрисовка элемента
    this.parentEl.innerHTML = InnFormWidget.markup;

    this.element = this.parentEl.querySelector(InnFormWidget.selector);
    this.submit = this.element.querySelector(InnFormWidget.submitSelector);
    this.input = this.element.querySelector(InnFormWidget.inputSelector);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const { value } = this.input;

    if (isValidInn(value)) {
      this.element.classList.add('valid');
      this.element.classList.remove('invalid');
    } else {
      this.element.classList.add('invalid');
      this.element.classList.remove('valid');
    }
  }
}
