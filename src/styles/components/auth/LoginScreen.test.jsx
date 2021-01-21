import React from 'react';
import configureStore from 'redux-mock-store'; // ES6 modules
import '../../../setupTest.jest';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from '../../../actions/auth';

import LoginScreen from '../../../components/auth/LoginScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pruebas en <LoginScreen/>', () => {
  let store;
  const initState = {
    auth: {},
    ui: {
      loading: false,
      msg: null,
    },
  };
  beforeEach(() => {
    store = mockStore(initState);
  });
  store.dispatch = jest.fn();
  test('debe de mostrarse correctamente', () => {
    const wrapper = shallow(
      <Provider store={store}>
        {' '}
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de disparar las acciones startGoogleLogin', () => {
    wrapper.find('google-btn').prop('onClick')();
    expect(startGoogleLogin).toHaveBeenCalled();
  });
});
