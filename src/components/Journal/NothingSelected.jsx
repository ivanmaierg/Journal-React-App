import React from 'react';

const NothingSelected = () => {
  console.log(this);
  return (
    <div className="nothing__main-content">
      <p>
        Select something
        <br />
        or create a entry
      </p>
      <i className="far fa-star fa-4x mt-5" />
    </div>
  );
};

export default NothingSelected;
