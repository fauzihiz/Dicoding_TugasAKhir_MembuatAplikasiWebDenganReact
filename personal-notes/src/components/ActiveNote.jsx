import React from 'react';
import NoteCard from './NoteCard';

const ActiveNote = ({ notes, onDelete, onArchive }) => {
  return (
    <div id='activeNote'>
      {notes.length > 0 ? notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      )) : <p>Tidak ada catatan</p>}
    </div>
  );
};

export default ActiveNote;