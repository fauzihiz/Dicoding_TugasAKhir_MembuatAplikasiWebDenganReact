import React from 'react';
import ActiveNote from './ActiveNote';
import ArchivedNote from './ArchivedNote';

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div>
      <h2>Catatan Aktif</h2>
      <ActiveNote
        notes={notes.filter(note => !note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}
      />

      <h2>Arsip</h2>
      <ArchivedNote
        notes={notes.filter(note => note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
};

export default NoteList;