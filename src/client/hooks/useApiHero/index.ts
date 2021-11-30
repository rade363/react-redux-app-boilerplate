import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { thunkFetchHero, thunkRemoveHero } from '../../store/hero/thunks';

export default function useApiHero() {
  const dispatch = useDispatch();

  const fetchHeroData = useCallback((heroId: number) => {
    dispatch(thunkFetchHero(heroId));
  }, [dispatch]);

  const removeHero = useCallback(() => {
    dispatch(thunkRemoveHero());
  }, [dispatch]);

  return { fetchHeroData, removeHero };
}
