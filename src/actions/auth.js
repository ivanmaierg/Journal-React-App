/* eslint-disable react-hooks/rules-of-hooks */
import types from '../types/types';
import { uiStartLoading, uiFinishLoading } from '../actions/ui';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import Swal from 'sweetalert2';
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
        Swal.fire({
          title: 'Error!',
          text: err,
          icon: 'error',
          confirmButtonText: 'ok',
        });
        dispatch(uiStartLoading);
      });
  };
};
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)))
      .catch((err) =>
        Swal.fire({
          title: 'Error!',
          text: err,
          icon: 'error',
          confirmButtonText: 'ok',
        }),
      );
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
      .catch((err) =>
        Swal.fire({
          title: 'Error!',
          text: err,
          icon: 'error',
          confirmButtonText: 'ok',
        }),
      );
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

export const logout = () => ({
  type: types.logout,
});
export const startLogout = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(logout());
    } catch (e) {
      console.log(e.message);
    }
  };
};
