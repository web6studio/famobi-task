import { useQuery } from 'react-query';
import { BASE_URL } from '../constants';

// TODO: Add types, error processing
const fetchGame = async (id: string) => {
  const res = await fetch(`${BASE_URL}?id==${id}`);
  return res.json();
};

const useGame = (id: string) => useQuery(['game', id], () => fetchGame(id));

export default useGame;
