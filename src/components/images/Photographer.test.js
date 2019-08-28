import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  const user = shallow(<User />);

  it('renders properly', () => {
    expect(user.debug()).toMatchSnapshot();
  });
});
