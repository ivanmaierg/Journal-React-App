/* eslint-disable react/prop-types */
import React from 'react';

const JournalEntry = ({ entry, img }) => {
  console.log('hey');
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="journal__entry-body">
        <p className="journal__entry-title">Hoy es un buen día</p>
        <p className="journal__entry-content">{entry}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
