/* eslint-disable semi */
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  console.log('hey');
  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />
        <button className="btn btn-primary point" type="submit">
          Register
        </button>
        <div className="auth__social-networks mb-5 mt-5">
          <div className="mt-1">
            <Link className="link" to="/auth/login">
              Already registered?
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterScreen;
