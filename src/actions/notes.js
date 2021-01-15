import { db } from '../firebase/firebase-config';
import loadNotes from '../helpers/loadNotes';
import { savedToast, swalError } from '../helpers/toast';
import types from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };
    //espera q se haga la insercion
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});
export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      delete note.url;
    }
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    try {
      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
      console.log('antes del dispatch');
      dispatch(refreshNote(note.id, noteToFirestore));
      savedToast(noteToFirestore.title);
    } catch (err) {
      swalError(err);
      throw err;
    }
  };
};
export const refreshNote = (id, note) => {
  console.log(note);
  return {
    type: types.notesUpdated,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};
