'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './movieList.module.css';

export type MovieListType = {
  title: string;
  id: string;
  poster_path: string;
};

export default function MovieList({ title, id, poster_path }: MovieListType) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
