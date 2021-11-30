import API from './index';

export type HeroEntry = {
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

const fetchHero = (id = 1) => API.get<HeroEntry>(`/people/${id}`);

// eslint-disable-next-line import/prefer-default-export
export { fetchHero };
