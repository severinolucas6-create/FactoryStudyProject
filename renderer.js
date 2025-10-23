const ul = document.getElementById('slotsList');
const slots = window.studyAPI && window.studyAPI.getDemoSlots ? window.studyAPI.getDemoSlots() : [];
slots.forEach(function(s) {
  var li = document.createElement('li');
  li.textContent = s.start_hm + ' - ' + s.duration_min + 'min: ' + s.label;
  ul.appendChild(li);
});
