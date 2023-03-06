import InnFormWidget from '../widget';

test('widget', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnFormWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(InnFormWidget.markup);
});
