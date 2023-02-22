import { useQuery } from 'react-query';
import { BASE_API_URL } from '../constants';

const fetchGame = async (id: string) => {
  const res = await fetch(`${BASE_API_URL}/game?id=${id}`);
  return res.json();
};

const useGame = (id: string) => useQuery(['game', id], () => fetchGame(id));

export default useGame;
