import React from 'react';
import Draggable, { DraggableCore } from 'react-draggable';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.trackWidth = 20 * this.props.images.length;
    this.thumbWidth = 100 / this.props.images.length;
    this.thumbStyle = { width: this.thumbWidth + '%', left: 10 };

    this.setSlideSnap = this.setSlideSnap.bind(this);
    this.arrowClick = this.arrowClick.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.state = {
      trackPos: 0,
      slideSnap: 100,
    }
  }

  handleDrag(e) {
    this.setState((state) => {
      return { trackPos: Math.round(state.trackPos + (Math.sign(e.movementX) * this.state.slideSnap / 20)) }
    })
    document.getElementById('sliderTrack').style.left = this.state.trackPos;
  }

  getLeftBound() {
    return this.state.slideSnap * -(this.props.images.length - 5)
  }

  handleStop() {
    var track = document.getElementById('sliderTrack');
    track.style.transition = 'left 0.3s ease-out';
    document.getElementById('viewPrev').style.color = 'rgb(74,142,194)';
    document.getElementById('viewNext').style.color = 'rgb(74,142,194)';
    if (this.state.trackPos <= this.getLeftBound() + .5 * this.state.slideSnap) {
      this.setState((state) => {
        return { trackPos: this.getLeftBound() }
      });
      document.getElementById('viewNext').style.color = 'rgb(156,156,156)';
    } else if (this.state.trackPos >= 0 - .5 * this.state.slideSnap) {
      document.getElementById('viewPrev').style.color = 'rgb(156,156,156)';
      this.setState((state) => {
        return { trackPos: 0 }
      })
    } else {
      this.setState((state) => {
        return { trackPos: Math.round(state.trackPos / state.slideSnap) * state.slideSnap }
      })
    }
    setTimeout(() => {
      track.style.transition = 'none'
    }, 300)
  }

  arrowClick({ target }) {
    var track = document.getElementById('sliderTrack');
    var viewWidth = document.getElementById('sliderList').clientWidth;
    var direction = 0;
    document.getElementById('viewPrev').style.color = 'rgb(74,142,194)';
    document.getElementById('viewNext').style.color = 'rgb(74,142,194)';
    target.id === 'viewPrev' ? direction = 1 : direction = -1;
    track.style.transition = 'left 0.6s ease-out';
    if (target.id === 'viewPrev'
      && this.state.trackPos >= 0 - 4 * this.state.slideSnap
    ) {
      target.style.color = 'rgb(156,156,156)';
      this.setState((state) => {
        return { trackPos: 0 }
      })
    } else if (target.id === 'viewNext' && this.state.trackPos <= this.getLeftBound() + 4 * this.state.slideSnap
    ) {
      target.style.color = 'rgb(156,156,156)';
      this.setState((state) => {
        return { trackPos: this.getLeftBound() }
      })
    } else {
      this.setState((state) => {
        return { trackPos: Math.round(state.trackPos + direction * 4 * state.slideSnap) }
      });
    }
    setTimeout(() => {
      track.style.transition = 'none'
    }, 600)
  }

  setSlideSnap() {
    this.setState(() => {
      return { slideSnap: Math.round(document.getElementById('sliderList').clientWidth / 5) - 2 }
    });
  }

  render() {
    return (
      <div className='thumbnails col'>
        <button id='viewPrev' className='arrow fas fa-chevron-left' onClick={this.arrowClick} />
        <div id='sliderList'>
          <DraggableCore
            // defaultPosition={{ x: 0, y: 0 }}
            // bounds={{ right: 0, left: -(this.state.slideSnap * (this.props.images.length - 5)) }}
            // axis='x'
            position={this.state.position}
            grid={[this.state.slideSnap / 20]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <div id='sliderTrack' style={{ left: this.state.trackPos, width: this.trackWidth + '%' }} >
              {
                this.props.images.map((image, index) =>
                  <div className='thumbLink' style={this.thumbStyle}>
                    <img id={index} onClick={this.props.selectImage} className='thumbnail' src={image + '/150/150.jpg'} />
                  </div>
                )
              }
            </div>
          </DraggableCore>
        </div>
        <button id='viewNext' className='arrow fas fa-chevron-right' onClick={this.arrowClick}></button>
      </div >
    )
  }

  componentDidMount() {
    this.setSlideSnap();
    window.addEventListener('resize', this.setSlideSnap);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSlideSnap);
  }
}

export default Carousel;