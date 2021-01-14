import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {(props) =>
        isLoggedIn.login ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    </Route>
  );
};

PrivateRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};
export default PrivateRoutes;
