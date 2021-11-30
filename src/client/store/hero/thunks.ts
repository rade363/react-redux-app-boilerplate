import { Dispatch } from 'redux';
import { heroError, heroLoaded, heroRequested, heroRemoved } from './actions';
import { fetchHero } from '../../api/swapi/hero';
import { FetchHero } from './types';

const thunkFetchHero = (heroId: number): FetchHero => (dispatch: Dispatch) => {
  dispatch(heroRequested());
  fetchHero(heroId)
    .then(response => dispatch(heroLoaded(response.data)))
    .catch(() => dispatch(heroError()));
};

const thunkRemoveHero = () => (dispatch: Dispatch) => {
  dispatch(heroRemoved());
};

export {
  thunkFetchHero,
  thunkRemoveHero,
};
