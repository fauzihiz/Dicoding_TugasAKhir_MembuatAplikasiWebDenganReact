import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import { getInitialData } from './utils/index';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    const newNote = {
      id: +new Date(), // ID unik
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes([...notes, newNote]); // Tambah ke list
    setTitle(''); // Reset input
    setBody('');
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div>
      <h1>Daftar Catatan</h1>

      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Isi catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Tambah Catatan</button>
      </form>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => deleteNote(note.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
