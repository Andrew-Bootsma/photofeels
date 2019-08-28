import React from 'react';
import { shallow } from 'enzyme';
import PhotoItem from './PhotoItem';

describe('PhotoItem', () => {
  const photoItem = shallow(<PhotoItem />);

  it('renders properly', () => {
    expect(photoItem.debug()).toMatchSnapshot();
  });
});
