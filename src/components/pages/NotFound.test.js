import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  const notFound = shallow(<NotFound />);

  it('renders correctly', () => {
    expect(notFound).toMatchSnapshot();
  });
});
