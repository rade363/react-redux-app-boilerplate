import React, { useState, useEffect, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import useApiHero from '../../hooks/useApiHero';

import { HeroState } from '../../store/hero/types';
import { ApplicationState } from '../../store/types';

import arrow from './arrow.svg';

export default function App() {
  const heroData = useSelector<ApplicationState, HeroState>(state => state.hero);

  const { fetchHeroData, removeHero } = useApiHero();
  const [heroId, setHeroId] = useState<number>(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.currentTarget.value);
    setHeroId(id);
  };

  const handleClick = () => {
    removeHero();
  };

  useEffect(() => {
    fetchHeroData(heroId);
  }, [heroId]);

  const { loading, error, hero } = heroData;

  let heroComponent;

  if (loading) {
    heroComponent = <p>Loading...</p>;
  } else if (error) {
    heroComponent = <p>Error: could not load hero</p>;
  } else if (hero) {
    heroComponent = <h1>Your hero is {hero.name}</h1>;
  } else {
    heroComponent = null;
  }

  return (
    <div className="main">
      <h1>Hello world</h1>
      <img src={arrow} alt="sample" />
      <p>Enter an ID and check what Star Wars hero is assigned to it @ SWAPI</p>
      <input
        value={heroId}
        type="number"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Remove hero
      </button>
      { heroComponent }
    </div>
  );
}
