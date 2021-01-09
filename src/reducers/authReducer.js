import types from '../types/types';

//  STATE vacio cuando no este autentificado, si no va a ser un objeto

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    default:
      return state;
  }
};
export default authReducer;
