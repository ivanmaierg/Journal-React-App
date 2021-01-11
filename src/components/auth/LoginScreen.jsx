/* eslint-disable no-fallthrough */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import useForm from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loadingState } = useSelector((state) => state.ui);
  console.log(loadingState);
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
    const inputValidation = inputIsValid('email') || inputIsValid('password');

    if (inputValidation) {
      console.log(inputValidation);
      return dispatch(setError(inputValidation));
    }
    dispatch(removeError());
    dispatch(startLoginEmailPassword(email, password));
  };
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const inputIsValid = (input) => {
    switch (input) {
      case 'email':
        if (!validator.isEmail(email)) {
          return 'email is empty';
        }
      case 'password':
        if (password.trim().length === 0) {
          return 'password is empty';
        }
      default:
        console.log('ay');
        break;
    }
  };
  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary point" type="submit" disabled={loadingState}>
          Login
        </button>
      </form>
      <div className="auth__social-networks mb-5 mt-5">
        <p>Login with social networks</p>

        <div className="google-btn" onClick={handleGoogleLogin}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <div className="mt-1">
          <Link className="link" to="/auth/register">
            Create new account
          </Link>
        </div>
        {msgError && (
          <div className="auth__alert-error slide-in-top">{msgError}</div>
        )}
      </div>
    </>
  );
};

export default LoginScreen;
