/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import JournalEntries from './JournalEntries';

const Sidebar = ({ name }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span>{` ${name}`}</span>
        </h3>
        <button onClick={handleLogout} type="button" className="btn">
          Logout
        </button>
      </div>
      <button
        type="button"
        className="journal__new-entry"
        onClick={handleAddNew}
      >
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">New entry</p>
      </button>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
