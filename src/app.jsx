import React from 'react';
import ReactDOM from 'react-dom';
import request from 'es6-request';

var url = window.location.origin;
var params = (new URLSearchParams(window.location.search));

console.log(url + params)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item_number: params.get('item_number'), currentImage: 1 }
  }


  render() {
    return (
      <div>
        <div id='main'>MAIN</div>
        <div id='carousel'>CAROUSEL</div>
      </div>
    )
  }


  componentDidMount() {
    request.get(url + '/product')
      .query(params)
      .then(([body, res]) => {
        this.setState(state => {
          return { data: body }
        })
      })
      .catch(err => console.log(err));
  }
}

export default App;