import React from 'react';
import { shallow } from 'enzyme';
import PhotoItem from './PhotoItem';

describe('PhotoItem', () => {
  const photoItem = shallow(<PhotoItem />);

  it('renders correctly', () => {
    expect(photoItem.debug()).toMatchSnapshot();
  });
});
