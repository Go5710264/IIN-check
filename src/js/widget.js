export class InnFormWidget {
    constructor(parentEl) { // аргумент - элемент родителя в котором будет отрисовываться экземпляр виджета
        this.parentEl = parentEl;
    }

    static get markup () {
        return `
            <form class="innogrn-form-widget">
                <div class="form-control">
                    <label for="innorgn-input">Введите ИНН/ОГРН</label>
                    <input type="text" id="innorgn-input" data-id="innorgn-input">
                </div>
                <button class="innorgn-submit">Далее</button>
            </form>
        `
    }

    bindToDOM() { // отрисовка элемента
        this.parentEl.innerHTML = InnFormWidget.markup;
    }
}