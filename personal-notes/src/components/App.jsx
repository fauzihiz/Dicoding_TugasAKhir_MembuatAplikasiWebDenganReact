import React, { useState } from 'react';
import { getInitialData } from '../utils/index';
import Search from '../components/Search';
import AddNote from '../components/Add';
import NoteList from '../components/NoteList';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <h1>Personal Notes</h1>
      <Search onSearch={setSearchKeyword} />
      <AddNote onAdd={addNote} />
      <NoteList
        notes={filteredNotes}
        onDelete={deleteNote}
        onArchive={toggleArchive}
      />
    </div>
  );
};

export default App;