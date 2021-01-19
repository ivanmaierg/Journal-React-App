import {
  removeError,
  setError,
  uiFinishLoading,
  uiStartLoading,
} from '../../actions/ui';
import types from '../../types/types';

describe('Preubas en ui-actions', () => {
  test('todas las acciones debe de funcionar', () => {
    const action = setError('Help');
    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'Help',
    });
    const removeErrorAction = removeError();
    const startLoadingAction = uiStartLoading();
    const finishLoadingAction = uiFinishLoading();
    expect(removeErrorAction).toEqual({ type: types.uiRemoveError });
    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
      payload: { loading: true },
    });
    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
      payload: { loading: false },
    });
  });
});
