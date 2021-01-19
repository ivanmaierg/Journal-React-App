import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import JournalScreen from '../components/Journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

import { startLoadingNotes } from '../actions/notes';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState({ check: true });

  const [isLoggedIn, setIsLoggedIn] = useState({ login: true });
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn({ login: true });
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn({ login: false });
      }
      setChecking({ check: false });
    });
  }, [checking.check]);
  if (checking.check) {
    return <h1>wait..</h1>;
  }
  console.log(isLoggedIn);
  return (
    <div className="auth__main">
      <Router>
        <Switch>
          <PublicRoutes
            path="/auth"
            isLoggedIn={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRoutes
            component={JournalScreen}
            path="/"
            isLoggedIn={isLoggedIn}
          />
          <Redirect to="/auth/login" />
        </Switch>
        {/* {Route path=/ no es exact component={authRuter}}
      {MainRoute <Route exact path="/" component={JournalScreen}} */}
      </Router>
    </div>
  );
};

export default AppRouter;
