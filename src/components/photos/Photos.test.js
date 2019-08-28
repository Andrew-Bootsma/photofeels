import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Photos', () => {
  const photos = shallow(<Photos />);

  it('renders correctly', () => {
    expect(photos).toMatchSnapshot();
  });
});
