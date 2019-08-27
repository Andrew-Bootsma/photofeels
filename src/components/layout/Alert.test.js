import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  const alert = shallow(<Alert />);

  it('renders properly', () => {
    expect(alert.debug()).toMatchSnapshot();
  });
});
