const ul = document.getElementById('slotsList');
const slots = window.studyAPI?.getDemoSlots() || [];
slots.forEach(s => {
  const li = document.createElement('li');
  li.textContent = \\ - \min: \\;
  ul.appendChild(li);
});
