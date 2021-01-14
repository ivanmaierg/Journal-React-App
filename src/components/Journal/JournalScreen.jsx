import React from 'react';
import { useSelector } from 'react-redux';
import NotesScreen from '../notes/NotesScreen';
// import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar';

const JournalScreen = () => {
  const {name} = useSelector(state => state.auth)
  return (
    <div className="journal__main-content">
      <Sidebar name={name}/>
      <main>
        {/* <NothingSelected /> */}
        <NotesScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
