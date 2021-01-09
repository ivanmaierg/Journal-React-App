/* eslint-disable no-unused-vars */
import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 5, 4, 3, 2];
  return (
    <div className="journal__entries">
      {entries.map((entry) => (
        <JournalEntry
          entry={entry}
          img="https://pbs.twimg.com/profile_images/1327391021647470592/cZ673L7I_400x400.jpg"
          key={entry}
        />
      ))}
    </div>
  );
};

export default JournalEntries;
