import { combineReducers } from 'redux';

// Reducers
import auth from './auth/reducer';
import wallets from './wallets/reducer';

const reducers = combineReducers({
  auth,
  wallets
});

export default reducers;
