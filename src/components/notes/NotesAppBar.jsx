import React from 'react';

const NotesAppBar = () => {
  console.log('hey');
  return (
    <div className="notes__appbar">
      <span>27 de agosto 2020</span>
      <div className="notes__appbar-buttons">
        <button type="button" className="btn btn-primary">
          Picture
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
