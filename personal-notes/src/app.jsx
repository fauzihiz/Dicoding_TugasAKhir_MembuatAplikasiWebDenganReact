import React, { useState } from 'react';
import { getInitialData } from './utils/data';
import NoteItem from './components/NoteItem';

function App() {
  const [notes, setNotes] = useState(getInitialData());

  return (
    <div className="note-app">
      <h1>Personal Notes</h1>
      <div className="note-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
}

export default App;
