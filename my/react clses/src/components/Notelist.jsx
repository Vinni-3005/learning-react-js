/*import React from 'react';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          {note}
          <button onClick={() => deleteNote(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList; */

// NoteList.js
import React from 'react';
import NoteComponent from './NoteComponent';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteComponent
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default NoteList;

