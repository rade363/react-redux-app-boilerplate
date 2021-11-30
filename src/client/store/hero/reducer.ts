import { HeroState, HeroActions } from './types';
import { FETCH_HERO_FAILURE, FETCH_HERO_REQUEST, FETCH_HERO_SUCCESS, REMOVE_HERO } from './actions';

const initialState: HeroState = {
  error: false,
  loading: true,
  hero: null,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action: HeroActions) {
  switch (action.type) {
    case FETCH_HERO_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case FETCH_HERO_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case FETCH_HERO_SUCCESS:
      const { hero } = action.payload;
      return {
        hero,
        error: false,
        loading: false,
      };
    case REMOVE_HERO:
      return {
        hero: null,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
