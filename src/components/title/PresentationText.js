import React, { useEffect, useRef } from 'react';
import './PresentationText.css';

function PresentationText() {
  const presentationTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = presentationTextRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add('animate');
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="presentation-text" ref={presentationTextRef}>
      <h2>About Me</h2>
      <p>
        I am a <b>passionate developer</b> with experience in building web applications using modern technologies.
        I enjoy solving complex problems and continuously learning new skills to improve my craft.
      </p>
    </div>
  );
}

export default PresentationText;