/* eslint-disable no-return-await */
import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import {
  startNewNote,
  startSaveNote,
} from '../../actions/notes';
// import { startLoadingNotes } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
// eslint-disable-next-line no-unused-vars
import fileUpload from '../../helpers/fileUpload';
import types from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
  __esModule: true,
  fileUpload: jest.fn(() => 'https://hola-mundo.com/cosa.jpg'),
}));
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: 'testing',
  },
  notes: {
    active: {
      id: '9HHWwWX3fGyTm0FtyYCK',
      title: 'hola',
      body: 'Holasa',
    },
  },
};
let store = mockStore(initState);
describe('Pruebas con las acciones de notes', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
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
    const action1 = actions[0];

    await db.doc(`testing/journal/notes/${action1.payload.id}`).delete();
  });
  test('startSaveNote debe de actualizar la nota', async () => {
    const note = {
      id: '9HHWwWX3fGyTm0FtyYCK',
      title: 'titulo',
      body: 'body',
    };
    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();
    expect(typeof actions).toBe('object');
    expect(actions[0]).toEqual({
      type: expect.any(String),
      payload: expect.any(Object),
    });
    expect(actions[0].payload.id).toBe(note.id);
  });

  // test('startUploading debe de actualizar el url del entry', async () => {
  //   const file = new File([], 'foto.jpg');
  //   await store.dispatch(startUploading(file));
  //   const docRef = await db
  //     .doc('/testing/journal/notes/9HHWwWX3fGyTm0FtyYCK')
  //     .get();
  //   expect(docRef.data().url).toBe('https://hola-mundo.com/cosa.jpg');
  // });

  // problemas de version
  // test('startLoadingNotes debe de cargar las notas', async () => {
  //   await store.dispatch(startLoadingNotes('testing'));
  //   const actions = store.getActions();
  //   expect(actions[0]).toEqual({
  //     type: types.notesLoad,
  //     payload: expect.any(Array),
  //   });
});
