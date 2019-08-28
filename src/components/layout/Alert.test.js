import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  const alert = shallow(<Alert />);

  it('renders correctly', () => {
    expect(alert).toMatchSnapshot();
  });
});
