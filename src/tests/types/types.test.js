import types from '../../types/types';

describe('pruebas en types', () => {
  const typesTest = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
    uiSetError: '[UI setError]',
    uiRemoveError: '[UI removeError]',
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',
    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Update note saved',
    notesFileUrl: '[Notes] Update note save2',
    notesDelete: '[Notes] delete note',
    notesLogoutCleaning: '[Notes Logout Cleaning]',
    notesStartNewNote: '[Notes StartNewNote]',
  };
  test('debe de tener los types correctos', () => {
    expect(types).toEqual(typesTest);
  });
});
