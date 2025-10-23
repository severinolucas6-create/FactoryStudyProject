const SlotFactory = require('../src/factories/SlotFactory');

test('creates sprint slot with defaults', () => {
  const s = SlotFactory.create('sprint');
  expect(s.label.toLowerCase()).toContain('sprint');
  expect(typeof s.start_hm).toBe('string');
  expect(typeof s.duration_min).toBe('number');
});
