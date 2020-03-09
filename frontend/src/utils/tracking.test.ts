import tracking from './tracking';

test('test tracking', () => {
  const data = {
    id: 1
  };
  expect(tracking(data)).toBe(1);
});
