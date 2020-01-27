import React from 'react';
import ReactDOM from 'react-dom';
import request from 'es6-request';
import Image from './image.jsx'

var url = window.location.origin;
var params = (new URLSearchParams(window.location.search));

console.log(url + params)

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
        <div id='zoomInstructions'>Tap or Pinch to Zoom</div>
        <div id='carousel'>CAROUSEL</div>
      </div>
    )
  }


  componentWillMount() {
    request.get(url + '/product?' + params)
      .then(([body, res]) => {
        console.log(body);
        body = JSON.parse(body);
        this.setState(state => {
          return { data: body }
        })
      })
      .catch(err => console.log(err));
  }
}

export default App;