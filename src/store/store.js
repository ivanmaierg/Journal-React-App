import { createStore, combineReducers } from 'react-redux';
import authReducer from '../reducers/authReducer';
// añadir reducers aca
const reducers = combineReducers({
  auth: authReducer,
});
const store = createStore(reducers);
export default store;
