import React from 'react';
import NoteCard from './NoteCard';

const ArchivedNote = ({ notes, onDelete, onArchive }) => {
  return (
    <div id='archivedNote'>
      {notes.length > 0 ? notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      )) : <p>Tidak ada arsip</p>}
    </div>
  );
};

export default ArchivedNote;