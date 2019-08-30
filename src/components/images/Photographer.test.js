import React from 'react';
import { shallow } from 'enzyme';
import Photographer from './Photographer';

describe('Photographer', () => {
  const photographer = shallow(<ImageItem />);

  it('renders correctly', () => {
    expect(photographer.debug()).toMatchSnapshot();
  });
});
