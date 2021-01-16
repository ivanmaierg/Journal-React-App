import { db } from '../firebase/firebase-config';
import fileUpload from '../helpers/fileUpload';
import loadNotes from '../helpers/loadNotes';
import { savedToast, swalError, swalLoading } from '../helpers/toast';
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
export const startUploading = (file) => {
  return async (dispatch, getState) => {
    //obtengo la nota activa, y le actualizo la url
    const { active: activeNote } = getState().notes;
    swalLoading(true);
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote));
    swalLoading(false);
  };
};
export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const activeId = id.current;
      await db.doc(`${uid}/journal/notes/${activeId}`).delete();
      dispatch(deleteNote(activeId));
    } catch (err) {
      throw err;
    }
  };
};
export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: { id },
});
export const cleaningNotesInLogout = () => ({
  type: types.notesLogoutCleaning,
});
