import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './reducers';
import middlewares from './middlewares';
import { ApplicationState } from './types';

/*
  Initial state can be 'undefined' in case the user visits for the first time (there is no localStorage record yet).
  Second argument (initialState) of 'createStore' can be undefined, [], {} & fn.
*/
export default function configureStore(initialState: ApplicationState | undefined, url = '/') {
  const store = createStore(
    createRootReducer(),
    initialState,
    compose(
      applyMiddleware(
        ...middlewares,
      ),
    ),
  );

  return { store };
}
