import React from 'react';

function Image({ image, product }) {
  return <div>
    <img className='mainImage' src={image + '/1200/1200.jpg'} alt={product} />
  </div>
}

export default Image;