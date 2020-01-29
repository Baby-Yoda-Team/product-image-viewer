import React from 'react';
import Draggable, { DraggableCore } from 'react-draggable';


class SliderTrack extends React.Component {
  constructor(props) {
    super(props);
    this.setSlideSnap = this.setSlideSnap.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.trackWidth = 20 * this.props.images.length;
    this.thumbWidth = 100 / this.props.images.length;
    this.thumbStyle = { width: this.thumbWidth + '%', left: 10 };
    this.state = {
      defaultPosition: { x: 0, y: 0 },
      dragging: false,
      slideSnap: 100,
    }
  }

  handleClick(e) {
    if (this.state.dragging === false) {
      this.props.selectImage(e);
    } else {
      this.setState(() => {
        return { dragging: false };
      })
    }

  }


  setSlideSnap() {
    this.setState(() => {
      return { slideSnap: document.getElementById('sliderList').clientWidth / 5 - 2 }
    });
  }

  render() {
    return (
      <Draggable
        defaultPosition={this.state.defaultPosition}
        bounds={{ right: 0, left: -(this.state.slideSnap * (this.props.images.length - 5)) }}
        axis='x'
        grid={[this.state.slideSnap]}
        onDrag={() => {
          this.setState(() => { return { dragging: true } })
        }}
      >
        <div id='sliderTrack' style={{ width: this.trackWidth + '%' }} >
          {
            this.props.images.map((image, index) =>
              <div className='thumbLink' style={this.thumbStyle}>
                <img id={index} onClick={this.handleClick} className='thumbnail' src={image + '/150/150.jpg'} />
              </div>
            )
          }
        </div>
      </Draggable>
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

export default SliderTrack;