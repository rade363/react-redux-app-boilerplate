import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Nullable } from '../../../types';

export type Hero = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export interface FetchHeroRequest extends Action {
  type: 'FETCH_HERO_REQUEST'
}

export interface FetchHeroSuccess extends Action {
  type: 'FETCH_HERO_SUCCESS',
  payload: {
    hero: Hero
  }
}

export interface FetchHeroFailure extends Action {
  type: 'FETCH_HERO_FAILURE'
}

export interface RemoveHero extends Action {
  type: 'REMOVE_HERO'
}

export type HeroState = {
  loading: boolean;
  error: boolean;
  hero: Nullable<Hero>;
};

export type FetchHero = ThunkAction<void, HeroState, unknown, Action<string>>;

export type HeroActions = FetchHeroRequest | FetchHeroSuccess | FetchHeroFailure | RemoveHero;
