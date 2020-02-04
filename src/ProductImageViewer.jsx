import React from 'react';
import ReactDOM from 'react-dom';
import styles  from '../public/styles.css';
import request from 'es6-request';
import Image from './image.jsx';
import Carousel from './carousel.jsx';

const port = 3004;
var url = 'http://localhost:' + port;
var params = (new URLSearchParams(window.location.search));

class ProductImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.selectImage = this.selectImage.bind(this);
    this.state = {
      item_number: params.get('item_number'), currentImage: 0,
      data: { images: [], productName: null },
    }
    request.get(url + '/product?' + params)
      .then(([body, res]) => {
        body = JSON.parse(body);
        this.setState(state => {
          return { data: body }
        })
      })
      .catch(err => console.log(err));
  }

  selectImage(e) {
    this.setState({ currentImage: e.target.id });
  }

  render() {
    return (
      <div>
        <div id='image'>
          {this.state.data.images[this.state.currentImage] ? <Image image={this.state.data.images[this.state.currentImage]} product={this.state.data.productName} /> : null
          }
        </div>
        <div id='zoomInstructions' className='row'>
          <div className='col'><i className="fas fa-search-plus"></i>Click to Zoom</div>
        </div>
        <div id='carousel' className='row'>
          {this.state.data.images != false ? <Carousel images={this.state.data.images} selectImage={this.selectImage} className='row' /> : null}
        </div>
      </div>
    )
  }

}

export default ProductImageViewer;