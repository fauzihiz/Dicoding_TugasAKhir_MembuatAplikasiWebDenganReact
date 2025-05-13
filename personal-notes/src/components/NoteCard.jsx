import React from 'react';
import { showFormattedDate } from '../utils/index';

const NoteCard = ({ note, onDelete, onArchive }) => {
  return (
    <div id='noteCard'>
      <h3>{note.title}</h3>
      <small>{showFormattedDate(note.createdAt)}</small>
      <p>{note.body}</p>
      <br />
      <button id='buttonHapus' onClick={() => onDelete(note.id)}>Hapus</button>
      <button id='buttonArsip' onClick={() => onArchive(note.id)}>
        {note.archived ? 'Kembalikan' : 'Arsipkan'}
      </button>
    </div>
  );
};

export default NoteCard;