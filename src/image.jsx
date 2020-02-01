import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.getWindowSize = this.getWindowSize.bind(this);
    this.setWindowHeight = this.setWindowHeight.bind(this);
    this.zoomClick = this.zoomClick.bind(this);
    this.state = {
      zoomLevel: 0,
      position: { x: 0, y: 0 }
    }
  }

  getWindowSize() {
    return (document.getElementById('zoomWindow').clientWidth)
  }

  setWindowHeight() {
    document.getElementById('zoomWindow').style.height = this.getWindowSize() - 10 + 'px';
  }

  zoomClick(e) {
    var zoomImage = document.getElementById('zoomImage');
    var mainImage = document.getElementById('mainImage');
    var zoomWindow = document.getElementById('zoomWindow');
    var zoomImageOffset = {
      x: zoomImage.getBoundingClientRect().left + window.pageXOffset,
      y: zoomImage.getBoundingClientRect().top + window.pageYOffset
    }
    var mainImageOffset = {
      x: zoomWindow.getBoundingClientRect().left + window.pageXOffset,
      y: zoomWindow.getBoundingClientRect().top + window.pageYOffset
    }
    var mainClickOffset = {
      x: e.pageX - mainImageOffset.x,
      y: e.pageY - mainImageOffset.y
    }
    var zoomClickOffset = {
      x: e.pageX - zoomImageOffset.x,
      y: e.pageY - zoomImageOffset.y
    }
    console.log('zio: ', zoomImageOffset, 'mio: ', mainImageOffset, 'mco: ', mainClickOffset)
    if (this.state.zoomLevel === 0) {
      //display larger image
      mainImage.style.display = 'none';
      zoomImage.style.display = 'block';
      var oldWidth = this.getWindowSize();
      var newWidth = (this.getWindowSize() + 1200) / 2;
      zoomImage.style.width = (newWidth + 'px');
      //reset position based on e coordinates
      zoomImage.style.left = (-Math.round(mainClickOffset.x / oldWidth * (newWidth - oldWidth))) + 'px';
      zoomImage.style.top = (-Math.round(mainClickOffset.y / oldWidth * (newWidth - oldWidth))) + 'px';
      this.setState((state) => {
        return ({ zoomLevel: 1 })
      })
    } else if (this.state.zoomLevel === 1) {
      var oldWidth = document.getElementById('zoomImage').clientWidth;
      zoomImage.style.width = '1200px';
      //reset position based on e coordinates
      zoomImage.style.left = (-Math.round(zoomClickOffset.x / oldWidth * (1200 - oldWidth) - (zoomImageOffset.x - mainImageOffset.x)) + 'px');
      //zoomImageOffset.x - mainImageOffset.x + (mainClickOffset.x * 1200 / oldWidth))
      zoomImage.style.top = (-Math.round(zoomClickOffset.y / oldWidth * (1200 - oldWidth) - (zoomImageOffset.y - mainImageOffset.y)) + 'px');
      this.setState((state) => {
        return ({ zoomLevel: 2 })
      })
    }
    else if (this.state.zoomLevel === 2) {
      zoomImage.style.display = 'none';
      mainImage.style.display = 'block';
      this.setState((state) => {
        return ({ zoomLevel: 0 })
      })
    }
  }

  render() {
    return (
      <div id='zoomWindow' onClick={this.zoomClick}>
        <img id='mainImage' className='img' src={this.props.image + '/680/680.jpg'} alt={this.props.product} />
        <img id='zoomImage' className='img' src={this.props.image + '/1200/1200.jpg'} alt={this.props.product} />
      </div>
    )
  }

  componentDidMount() {
    this.setWindowHeight();
    window.addEventListener('resize', this.setWindowHeight);

  }
}

export default Image;

// zoom image
//     position: absolute;
//     top: 0px;
//     left: -211px;
//     z-index: 5000;
//     max-width: 1200px;
//     max-height: 1200px;
//     width: 804px;
//     height: 803.5px;
//     overflow: hidden;