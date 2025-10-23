const { contextBridge } = require('electron');

// Expor dados de demo diretamente para evitar problemas com paths e sandbox
contextBridge.exposeInMainWorld('studyAPI', {
  getDemoSlots: () => [
    { start_hm: '19:45', duration_min: 60, label: 'Matéria do Dia - Teoria' },
    { start_hm: '21:45', duration_min: 45, label: 'Revisão Matéria Anterior' },
    { start_hm: '20:45', duration_min: 15, label: 'Pausa rápida' }
  ]
});
