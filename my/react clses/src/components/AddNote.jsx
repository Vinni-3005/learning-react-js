/*import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote; */

// AddNote.js
import React, { useState } from 'react';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' || content.trim() !== '') {
      onAdd({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;

