import React from 'react';
import NotesAppBar from './NotesAppBar';

const NotesScreen = () => {
  console.log('hey');
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        />
        <div className="note__image">
          <img
            src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
            alt="blue-eye"
          />
        </div>
      </div>
    </div>
  );
};

export default NotesScreen;
