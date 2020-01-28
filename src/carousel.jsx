import React from 'react';

function Carousel({ images }) {
  var trackWidth = 20 * images.length;
  var trackStyle = { width: trackWidth + '%' };
  var thumbWidth = 100 / images.length;
  var thumbStyle = { width: thumbWidth + '%' };
  console.log(images);
  return <div className='thumbnails col'>
    <button id='viewPrev' className='arrow fas fa-chevron-left' />
    <div id='slider'>
      <div id='sliderList'>
        <div id='sliderTrack' style={trackStyle}>
          {images.map(image =>
            <div className='thumbLink' style={thumbStyle}>
              <img id={image} className='thumbnail' src={image + '/200/200.jpg'} />
            </div>
          )}
        </div>
      </div>
    </div>
    <button id='viewNext' className='arrow fas fa-chevron-right'></button>  </div>
}

export default Carousel;