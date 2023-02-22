import { useQuery } from 'react-query';
import { BASE_API_URL } from '../constants';

const fetchGames = async (params: string) => {
  const res = await fetch(`${BASE_API_URL}/games${params}`);
  return res.json();
};

const useGames = (params: string) =>
  useQuery(['games', params], () => fetchGames(params));

export default useGames;
