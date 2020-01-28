import React from 'react';

class SliderTrack extends React.Component {
  constructor(props) {
    super(props);
    this.trackWidth = 20 * this.props.images.length;
    this.trackStyle = { width: this.trackWidth + '%' };
    this.thumbWidth = 100 / this.props.images.length;
    this.thumbStyle = { width: this.thumbWidth + '%' };
    this.state = {

    }
  }


  render() {
    return (
      <div id='sliderTrack' style={this.trackStyle}>
        {this.props.images.map(image =>
          <div className='thumbLink' style={this.thumbStyle}>
            <img id={image} className='thumbnail' src={image + '/200/200.jpg'} />
          </div>
        )}
      </div>
    )
  }
}

export default SliderTrack;