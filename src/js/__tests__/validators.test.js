import isValidInn from '../validators';

test('displaying the wrong INN', () => {
  const result = isValidInn('');

  expect(result).toBe(false);
});

test('displaying the wrong INN', () => {
  const result = isValidInn('Dmitry');

  expect(result).toBe(false);
});

test('displaying the correct INN', () => {
  const result = isValidInn('1234567890');

  expect(result).toBe(true);
});
