import { ITrendingMovieItem } from '../interfaces/apiData';

export default function MoviePoster({ movie }: { movie: ITrendingMovieItem }) {
  return (
    <div>
      <img src="" alt={`Poster for movie ${movie.title}`} />
      <p>{movie.title}</p>
    </div>
  );
}
