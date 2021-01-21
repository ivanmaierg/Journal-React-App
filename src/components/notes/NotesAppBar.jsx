import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import getDay from '../../helpers/getDate';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const [day] = useState(getDay());

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
      <span>{day}</span>
      <input
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        id="FileSelector"
      />
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
