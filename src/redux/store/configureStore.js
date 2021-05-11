import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStatInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from './initialState';

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStatInvariant(), thunk))
  );
}

export default configureStore();
