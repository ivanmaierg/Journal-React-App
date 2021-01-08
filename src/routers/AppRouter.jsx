import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import JournalScreen from '../components/Journal/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  console.log('hey');
  return (
    <div className="auth__main">
      <Router>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
        {/* {Route path=/ no es exact component={authRuter}}
      {MainRoute <Route exact path="/" component={JournalScreen}} */}
      </Router>
    </div>
  );
};

export default AppRouter;
