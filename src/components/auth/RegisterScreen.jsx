/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable semi */
import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const initialValues = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  const [formValues, handleInputChange] = useForm({ ...initialValues });
  const {
    name, email, password, password2,
  } = formValues;

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(console.log(formValues));
    const inputValidate = isFormValid();
    if (!inputValidate.state) {
      console.log({ inputValidate });
      return dispatch(setError(inputValidate.msg));
    }
    dispatch(removeError());
    dispatch(startRegisterWithEmailPasswordName(email, password, name));
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      return {
        state: false,
        msg: 'name is empty',
      };
    } if (!validator.isEmail(email)) {
      return {
        state: false,
        msg: 'email is no valid',
      };
    } if (password !== password2) {
      return {
        state: false,
        msg: 'The passwords fields are not equal',
      };
    } if (password.length < 5) {
      return {
        state: false,
        msg: 'The password should be at least 6 characters long',
      };
    }
    return { state: true };
  };
  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegistration}>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="email"
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
        <input
          className="auth__input"
          autoComplete="off"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary point" type="submit">
          Register
        </button>
      </form>

      <div className="auth__social-networks mb-5 mt-5">
        <div className="mt-1">
          <Link className="link" to="/auth/login">
            Already registered?
          </Link>
        </div>
      </div>
      {msgError && (
        <div className="auth__alert-error slide-in-top">{msgError}</div>
      )}
    </>
  );
};

export default RegisterScreen;
