import React from 'react';
import Sidebar from './Sidebar';

const JournalScreen = () => {
  console.log('hey');
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <h1>Main Content</h1>
      </main>
    </div>
  );
};

export default JournalScreen;
