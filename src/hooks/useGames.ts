import { useQuery } from 'react-query';
import { BASE_URL } from '../constants';

// TODO: Add types, error processing
const fetchGames = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

const useGames = () => useQuery('games', fetchGames);

export default useGames;
