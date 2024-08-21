// src/components/scrollpopup/ScrollContent.js
import React, { useState, useEffect } from 'react';
import './ScrollPopup.css';

function ScrollPopup({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-popup ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  );
}

export default ScrollPopup;