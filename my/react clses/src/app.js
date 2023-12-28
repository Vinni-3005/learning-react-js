/* import React, { useState } from 'react';
import AddNote from './components/AddNote';
import Notelist from './components/Notelist';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <AddNote addNote={addNote} />
      <Notelist notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App; */

import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import AddNote from './components/AddNote';
import Notelist from './components/Notelist';
import IndividualNote from './components/individualnote';
import './path/to/index.html'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setEditNote(null); // Close editing form if deleting the edited note
  };

  const editSelectedNote = (note) => {
    setEditNote(note);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? { ...updatedNote } : note
    );
    setNotes(updatedNotes);
    setEditNote(null);
  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      <div className="container">
        <div className="left-pane">
          <AddNote onAdd={addNote} />
          <NoteList
            notes={notes}
            onDelete={deleteNote}
            onEdit={editSelectedNote}
          />
        </div>
        <div className="right-pane">
          {editNote ? (
            <IndividualNote note={editNote} onUpdate={updateNote} />
          ) : (
            <p>Select a note to edit</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

