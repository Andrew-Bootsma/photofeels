import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  let app;

  beforeEach(() => {
    app = shallow(<App />, { disableLifecycleMethods: true });
  });

  afterEach(() => {
    app.unmount();
  });

  it('must show the id after api call success', done => {
    // here we are spying on componentDidMount to know that it has been called

    const spyDidMount = jest.spyOn(App.prototype, 'componentDidMount');

    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            id: 'abcde'
          });
        }
      });
    });

    const didMount = app.instance().componentDidMount();

    // expecting componentDidMount have been called

    expect(spyDidMount).toHaveBeenCalled();

    didMount.then(() => {
      // updating the app
      app.update();

      expect(app.find('id').text()).toContain('abcde');

      spyDidMount.mockRestore();
      fetch.mockClear();
      done();
    });
  });
});
