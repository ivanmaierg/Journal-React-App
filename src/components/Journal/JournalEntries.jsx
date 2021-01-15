/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="journal__entries">
      {notes.map((note) => (
        <JournalEntry
          {...note}
          img="https://pbs.twimg.com/profile_images/1327391021647470592/cZ673L7I_400x400.jpg"
          key={note.id}
        />
      ))}
    </div>
  );
};

export default JournalEntries;
