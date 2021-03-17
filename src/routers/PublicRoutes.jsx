/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoutes = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route {...rest}>
    {(props) => (isLoggedIn.login ? <Redirect to="/" /> : <Component {...props} />)}
  </Route>
);

export default PublicRoutes;
