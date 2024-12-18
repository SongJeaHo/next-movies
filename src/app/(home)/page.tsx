import { getMovies } from '@/lib/api/movie';
import MovieList from './components/movieList';
import styles from './home.module.css';

export const metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieList
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
