import React from 'react';
import ReactDOM from 'react-dom';
import request from 'es6-request';
import Image from './image.jsx';
import Carousel from './carousel.jsx';

var url = window.location.origin;
var params = (new URLSearchParams(window.location.search));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_number: params.get('item_number'), currentImage: 0,
      data: { images: [], productName: null }
    }
  }


  render() {
    return (
      <div>
        <div id='image'>
          {this.state.data.images[this.state.currentImage] ? <Image image={this.state.data.images[this.state.currentImage]} product={this.state.data.productName} /> : null
          }
        </div>
        <div id='zoomInstructions' className='row'>
          <div className='col'><i class="fas fa-search-plus"></i>Click to Zoom</div>
        </div>
        <div id='carousel' className='row'>
          {this.state.data.images != false ? <Carousel images={this.state.data.images} className='row'/> : null}
        </div>
      </div>
    )
  }


  componentWillMount() {
    request.get(url + '/product?' + params)
      .then(([body, res]) => {
        body = JSON.parse(body);
        this.setState(state => {
          return { data: body }
        })
      })
      .catch(err => console.log(err));
  }
}

export default App;