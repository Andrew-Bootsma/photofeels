import React from 'react';
import { shallow } from 'enzyme';
import ImageItem from './ImageItem';

describe('ImageItem', () => {
  const imageItem = shallow(<ImageItem />);

  it('renders properly', () => {
    expect(imageItem.debug()).toMatchSnapshot();
  });
});
