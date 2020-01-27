import React from 'react';

function Image({ image, product }) {
  return <div>
    <img src={image + '/300/400.jpg'} alt={product} />
  </div>
}

export default Image;