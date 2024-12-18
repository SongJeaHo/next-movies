import { FindMovieListResponseDtoType } from '@/types/api/movie.dto';
import { clientFetch } from '.';

export const getMovies = async () => {
  return await clientFetch<FindMovieListResponseDtoType[]>('movies');
};
