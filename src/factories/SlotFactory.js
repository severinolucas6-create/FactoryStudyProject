// src/factories/SlotFactory.js
const StudySlot = require('../models/StudySlot');

class SlotFactory {
  static create(type, opts = {}) {
    switch ((type || '').toLowerCase()) {
      case 'sprint':
        return new StudySlot({
          start_hm: opts.start_hm || '00:00',
          duration_min: opts.duration_min || 60,
          label: opts.label || 'Sprint'
        });
      case 'review':
        return new StudySlot({
          start_hm: opts.start_hm || '00:00',
          duration_min: opts.duration_min || 30,
          label: opts.label || 'Revisão Espaçada'
        });
      case 'pause':
        return new StudySlot({
          start_hm: opts.start_hm || '00:00',
          duration_min: opts.duration_min || 15,
          label: opts.label || 'Pausa'
        });
      default:
        return new StudySlot({
          start_hm: opts.start_hm || '00:00',
          duration_min: opts.duration_min || 10,
          label: opts.label || 'Genérico'
        });
    }
  }
}

module.exports = SlotFactory;
