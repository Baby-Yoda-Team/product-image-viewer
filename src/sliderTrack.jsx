import React from 'react';

class SliderTrack extends React.Component {
  constructor(props) {
    super(props);
    this.trackWidth = 20 * this.props.images.length;
    this.trackStyle = { width: this.trackWidth + '%' };
    this.thumbWidth = 100 / this.props.images.length;
    this.thumbStyle = { width: this.thumbWidth + '%' };
    this.defaultProps = {
      initialPos: {x: 0, y: 0}
    }
    this.state = {

    }
  }

//   getInitialState() {
//     return {
//       pos: this.props.initialPos,
//       dragging: false,
//       rel: null
//     }
//   },

//   componentDidUpdate(props, state) {
//     if (this.state.dragging && !state.dragging) {
//       document.addEventListener('mousemove', this.onMouseMove)
//       document.addEventListener('mouseup', this.onMouseUp)
//     } else if (!this.state.dragging && state.dragging) {
//       document.removeEventListener('mousemove', this.onMouseMove)
//       document.removeEventListener('mouseup', this.onMouseUp)
//     }
//   }

//   // calculate relative position to the mouse and set dragging=true
//   onMouseDown(e) {
//     // only left mouse button
//     if (e.button !== 0) return
//     var pos = $(this.getDOMNode()).offset()
//     this.setState({
//       dragging: true,
//       rel: {
//         x: e.pageX - pos.left,
//         y: e.pageY - pos.top
//       }
//     })
//     e.stopPropagation()
//     e.preventDefault()
//   }

//   onMouseUp(e) {
//     this.setState({dragging: false})
//     e.stopPropagation()
//     e.preventDefault()
//   }

//   onMouseMove(e) {
//     if (!this.state.dragging) return
//     this.setState({
//       pos: {
//         x: e.pageX - this.state.rel.x,
//         y: e.pageY - this.state.rel.y
//       }
//     })
//     e.stopPropagation()
//     e.preventDefault()
//   }

//   render() {
//     // transferPropsTo will merge style & other props passed into our
//     // component to also be on the child DIV.
//     return this.transferPropsTo(React.DOM.div({
//       onMouseDown: this.onMouseDown,
//       style: {
//         left: this.state.pos.x + 'px',
//         top: this.state.pos.y + 'px'
//       }
//     }, this.props.children))
//   }
// })


  render() {
    return (
      <div id='sliderTrack' style={this.trackStyle}>
        {this.props.images.map((image, index) =>
          <div className='thumbLink' style={this.thumbStyle}>
            <img id={index} onClick={this.props.selectImage} className='thumbnail' src={image + '/200/200.jpg'} />
          </div>
        )}
      </div>
    )
  }
}

export default SliderTrack;