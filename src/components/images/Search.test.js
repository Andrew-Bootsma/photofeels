import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  const search = shallow(<Search />);

  it('renders correctly', () => {
    expect(search).toMatchSnapshot();
  });
});
