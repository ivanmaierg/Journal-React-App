/* eslint-disable react-hooks/rules-of-hooks */
import types from '../types/types';
import { uiStartLoading, uiFinishLoading } from '../actions/ui';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(uiFinishLoading());
      })
      .catch((err) => {
        console.log(err)  
        dispatch(uiStartLoading)});
  };
};
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)));
  };
};
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => console.log(err))
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(user.uid, user.displayName);
      })
      .catch((err) => console.log(err));
  };
};
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
