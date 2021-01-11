import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import uiReducer from '../reducers/uiReducer';
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// añadir reducers aca
const reducers = combineReducers({
  auth: authReducer,
  ui:uiReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
