import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  '/banner 1.png',
  '/banner 2.png'
];

const Slideshow = () => {
  return (
    <Fade>
      {slideImages.map((each, index) => (
        <div key={index}>
          <img src={each} alt="slide"/>
        </div>
      ))}
    </Fade>
  )
}

export default Slideshow;