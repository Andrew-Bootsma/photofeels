import React from 'react';
import { shallow } from 'enzyme';
import Images from './Images';

describe('Images', () => {
  const images = shallow(<Images />);

  it('renders properly', () => {
    expect(images.debug()).toMatchSnapshot();
  });

  it('initializes the images and loading `props`', () => {
    images.setProps({ images: [], loading: false });
  });
});
