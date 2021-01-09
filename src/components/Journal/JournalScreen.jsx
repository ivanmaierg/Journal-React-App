import React from 'react';
import NotesScreen from '../notes/NotesScreen';
// import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar';

const JournalScreen = () => {
  console.log('hey');
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <NotesScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
