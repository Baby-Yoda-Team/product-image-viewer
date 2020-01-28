import React from 'react';

function Carousel({ images }) {
  console.log(images);
  return <div className='thumbnails col'>
    <button id='viewPrev' className='arrow fas fa-chevron-left' />
    <div id='slider'>
      <div id='sliderList'>
        <div id='sliderTrack'>
          {images.map(image =>
            <div className='thumbLink'>
              <img id={image} className='thumbnail' src={image + '/200/200.jpg'} />
            </div>
          )}
        </div>
      </div>
    </div>
    <button id='viewNext' className='arrow fas fa-chevron-right'></button>  </div>
}

export default Carousel;