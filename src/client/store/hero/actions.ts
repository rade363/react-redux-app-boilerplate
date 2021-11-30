import { ActionCreator } from 'redux';
import { FetchHeroFailure, FetchHeroRequest, FetchHeroSuccess, RemoveHero, Hero } from './types';

export const FETCH_HERO_REQUEST = 'FETCH_HERO_REQUEST';
export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS';
export const FETCH_HERO_FAILURE = 'FETCH_HERO_FAILURE';
export const REMOVE_HERO = 'REMOVE_HERO';

export const heroRequested: ActionCreator<FetchHeroRequest> = () => ({
  type: FETCH_HERO_REQUEST,
});

export const heroLoaded: ActionCreator<FetchHeroSuccess> = (hero: Hero) => ({
  type: FETCH_HERO_SUCCESS,
  payload: {
    hero,
  },
});

export const heroError: ActionCreator<FetchHeroFailure> = () => ({
  type: FETCH_HERO_FAILURE,
});

export const heroRemoved: ActionCreator<RemoveHero> = () => ({
  type: REMOVE_HERO,
  payload: {
    hero: null,
  },
});
