// src/examples/demo.js
const SlotFactory = require('../factories/SlotFactory');

const slots = [
  SlotFactory.create('sprint', { start_hm: '19:45', duration_min: 60, label: 'Matéria do Dia - Teoria' }),
  SlotFactory.create('review', { start_hm: '21:45', duration_min: 45, label: 'Revisão Matéria Anterior' }),
  SlotFactory.create('pause', { start_hm: '20:45', duration_min: 15, label: 'Pausa rápida' }),
];

for (const s of slots) {
  console.log(s.describe());
}
