import React, { useState, useEffect } from 'react';
import './Title.css';

function Title() {
  const [dynamicText, setDynamicText] = useState('Welcome To My Professional Portfolio');

  useEffect(() => {
    const texts = [
      'Welcome To My Professional Portfolio',
      'Explore My Projects',
      'Contact Me For Collaborations'
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setDynamicText(texts[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="title">
      <h1>CLAUDIO PALACIOS</h1>
      <p>{dynamicText}</p>
    </div>
  );
}

export default Title;