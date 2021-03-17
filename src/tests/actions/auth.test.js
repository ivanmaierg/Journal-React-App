import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from '../../actions/auth';
import types from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

const store = mockStore(initState);
describe('pruebas en auth actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('login y logout debe de crear la accion respectiva y deben de funcionar en el store', async () => {
    const uid = 'zarasa';
    const displayName = 'zarasa';
    await store.dispatch(login(uid, displayName));
    const loginResult = store.getActions();
    expect(loginResult).toEqual([
      {
        type: types.login,
        payload: { uid: 'zarasa', displayName: 'zarasa' },
      },
    ]);
    store.clearActions();
    store.dispatch(logout());
    const logoutResult = store.getActions();
    expect(logoutResult).toEqual([{ type: '[Auth] Logout' }]);
  });
  test('debe de realizar el startLogout', async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: types.logout },
      { type: types.notesLogoutCleaning },
    ]);
  });
  jest.setTimeout(10000);
  test('debe de iniciar con el startLoginEmailPassword', async () => {
    await store.dispatch(
      startLoginEmailPassword('testing@testing.com', '123456'),
    );
    const actions = store.getActions();
    console.log(actions);
  });
});
