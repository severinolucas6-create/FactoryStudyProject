// src/models/StudySlot.js
class StudySlot {
  constructor({ start_hm, duration_min, label }) {
    this.start_hm = start_hm;
    this.duration_min = duration_min;
    this.label = label;
  }

  describe() {
    return `${this.start_hm} - ${this.duration_min}min: ${this.label}`;
  }
}

module.exports = StudySlot;
