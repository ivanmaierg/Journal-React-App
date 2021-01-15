import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(active));
  };
  const handlePictureClick = () => {
    document.querySelector('#FileSelector').click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span>27 de agosto 2020</span>
      <input
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        id="FileSelector"
      />{' '}
      <div className="notes__appbar-buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePictureClick}
        >
          Picture
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
