import React from 'react';
import { shallow } from 'enzyme';
import Images from './Images';

describe('Images', () => {
  const images = shallow(<Images />);

  it('renders correctly', () => {
    expect(images.debug()).toMatchSnapshot();
  });
});
