import React from 'react';
import SliderTrack from './sliderTrack.jsx';

function Carousel({ images }) {
  return <div className='thumbnails col'>
    <button id='viewPrev' className='arrow fas fa-chevron-left' />
    <div id='slider'>
      <div id='sliderList'>
        <SliderTrack images={images} />
      </div>
    </div>
    <button id='viewNext' className='arrow fas fa-chevron-right'></button>  </div>
}

export default Carousel;