const noteInput = document.getElementById('noteInput');
const saveButton = document.getElementById('saveButton');
const noteList = document.getElementById('noteList');

if (noteInput && saveButton && noteList) {
  // Load saved notes from local storage
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

  // Display saved notes
  savedNotes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note;
    noteList.appendChild(li);
  });

  // Save note when button is clicked
  saveButton.addEventListener('click', () => {
    const note = noteInput.value.trim();
    if (note) {
      savedNotes.push(note);
      localStorage.setItem('notes', JSON.stringify(savedNotes));
      const li = document.createElement('li');
      li.textContent = note;
      noteList.appendChild(li);
      noteInput.value = '';
    }
  });
} else {
  console.error('Could not find necessary elements');
}
