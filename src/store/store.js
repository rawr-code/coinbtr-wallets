import { compose, createStore, applyMiddleware } from 'redux';

// Middlewares
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './rootReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
