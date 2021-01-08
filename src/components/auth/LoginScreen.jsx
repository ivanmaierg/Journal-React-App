import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  console.log('hey');
  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
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
        <button className="btn btn-primary point" type="submit">
          Login
        </button>
        <div className="auth__social-networks mb-5 mt-5">
          <p>Login with social networks</p>

          <div className="google-btn">
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
        </div>
      </form>
    </>
  );
};

export default LoginScreen;
