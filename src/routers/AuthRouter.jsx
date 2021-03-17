import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';

const AuthRouter = () => (
  <div className="auth__main">
    <div className="auth__box-container">
      <Switch>
        <Route path="/auth/login" component={LoginScreen} />
        <Route path="/auth/register" component={RegisterScreen} />
      </Switch>
    </div>
  </div>
);

export default AuthRouter;
