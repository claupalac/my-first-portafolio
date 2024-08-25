import React, { useState, useEffect } from 'react';
import './Title.css';

function Title() {
  const [dynamicText, setDynamicText] = useState('welcome to my professional portfolio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const texts = [
      'welcome to my professional portfolio',
      'explore my projects',
      'contact me for collaborations'
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setDynamicText(texts[index]);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className={`title ${isScrolled ? 'small' : ''}`}>
        <h1>CLAUDIO PALACIOS</h1>
        <p>{dynamicText}</p>
      </div>
  );
}

export default Title;