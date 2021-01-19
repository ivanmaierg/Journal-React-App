/* eslint-disable no-return-await */
import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import types from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  auth: {
    uid: 'testing',
  },
});
describe('Pruebas con las acciones de notes', () => {
  test('debe de crear una nueva nota startNewNote', async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: expect.any(String),
        body: expect.any(String),
        date: expect.any(Number),
      },
    });
    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: expect.any(String),
        body: expect.any(String),
        date: expect.any(Number),
      },
    });
    actions.forEach(async (action) => {
      await db.doc(`testing/journal/notes/${action.payload.id}`).delete();
    });
  });
});
