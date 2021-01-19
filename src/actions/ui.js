import types from '../types/types';

const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});
const removeError = () => ({
  type: types.uiRemoveError,
});
const uiStartLoading = () => ({ type: types.uiStartLoading, payload: { loading: true } });
const uiFinishLoading = () => ({ type: types.uiFinishLoading, payload: { loading: false } });

export {
  setError, removeError, uiStartLoading, uiFinishLoading,
};
