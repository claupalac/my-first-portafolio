// src/components/BadgesBar/BadgesBar.js
import React from 'react';
import './BadgesBar.css';

const BadgesBar = ({ badges }) => {
  return (
    <div className="badges-bar">
      {badges.map((badge, index) => (
        <div key={index} className="badge">
          {<img src={badge} alt={`Badge ${index}`} />}
        </div>
      ))}
    </div>
  );
};

export default BadgesBar;