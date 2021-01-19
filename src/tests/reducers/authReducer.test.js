import authReducer from '../../reducers/authReducer';
import types from '../../types/types';

describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado sin hacer cambios', () => {
    const state = { name: 'abc' };
    const reducer = authReducer(state, {});
    expect(reducer).toEqual({ name: 'abc' });
  });
  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: { uid: 'aaaa', displayName: 'Ivan' },
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid: 'aaaa', name: 'Ivan' });
  });
  test('debe de deslogear al usuario y retornar un objeto vacio', () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
  });
});
