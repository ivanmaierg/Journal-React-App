import React from 'react';
import { useSelector } from 'react-redux';
import NotesScreen from '../notes/NotesScreen';
import NothingSelected from './NothingSelected';
// import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar';

const JournalScreen = () => {
  const {
    auth: { name },
  } = useSelector((state) => state);

  const {
    notes: { active },
  } = useSelector((state) => state);
  return (
    <div className="journal__main-content">
      <Sidebar name={name} />
      <main>{active ? <NotesScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
