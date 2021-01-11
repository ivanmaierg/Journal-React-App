import types from '../types/types';

const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});
const removeError = (err) => ({
  type: types.uiRemoveError,
  payload: err,
});
const uiStartLoading = () => {
  return { type: types.uiStartLoading, payload: { loading: true } };
};
const uiFinishLoading = () => {
  return { type: types.uiFinishLoading, payload: { loading: false } };
};

export { setError, removeError, uiStartLoading, uiFinishLoading };
