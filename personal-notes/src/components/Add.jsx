import React, { useState } from 'react';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    onAdd(newNote);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Sisa karakter: {maxTitleLength - title.length}</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
        placeholder="Judul"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi catatan"
        required
      ></textarea>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default AddNote;