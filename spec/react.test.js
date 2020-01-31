import React from 'react';
import App from '../src/app.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../src/image.jsx';
import Carousel from '../src/carousel.jsx';
import SliderTrack from '../src/sliderTrack.jsx';


Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  test('App renders an Image component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#image')).toHaveLength(1);
  });

  test('App renders a zoomInstructions component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#zoomInstructions')).toHaveLength(1);
  });

  test('App renders a carousel component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#carousel')).toHaveLength(1);

  });
});

describe('Image', () => {
  test('Image renders a Main Image component', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find('.mainImage')).toHaveLength(1);
  });
});

describe('Carousel', () => {
  test('Carousel renders a slider component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('#slider')).toHaveLength(1);
  });
  test('Carousel renders a sliderList component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('#sliderList')).toHaveLength(1);
  });

});