import React from 'react';

function Image({ image, product }) {
  return <div>
    <img className='mainImage img' src={image + '/800/800.jpg'} alt={product} />
  </div>
}

export default Image;