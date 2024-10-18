import React from 'react';
import './BitwiseMatrix.css';

const BitwiseMatrix = ({ title, numbers }) => {
  return (
    <div className="matrix-container">
      <h3>{title}</h3>
      <div className="matrix">
        {numbers.map((num, index) => (
          <div key={index} className="matrix-cell">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitwiseMatrix;