import { combineReducers } from 'redux';
import { ApplicationState } from './types';

import heroReducer from './hero/reducer';

const createRootReducer = () => combineReducers<ApplicationState>({
  hero: heroReducer,
});

export default createRootReducer;
