const { contextBridge } = require('electron');

const slotFactoryPath = (process && typeof process.cwd === 'function' ? process.cwd() : __dirname) + '/src/factories/SlotFactory.js';
let SlotFactory;
try {
  SlotFactory = require(slotFactoryPath);
} catch (err) {
  console.error('Failed to require SlotFactory at', slotFactoryPath, err);
  throw err;
}

contextBridge.exposeInMainWorld('studyAPI', {
  getDemoSlots: () => [
    SlotFactory.create('sprint', { start_hm: '19:45', duration_min: 60, label: 'Matéria do Dia - Teoria' }),
    SlotFactory.create('review', { start_hm: '21:45', duration_min: 45, label: 'Revisão Matéria Anterior' }),
    SlotFactory.create('pause', { start_hm: '20:45', duration_min: 15, label: 'Pausa rápida' })
  ]
});
