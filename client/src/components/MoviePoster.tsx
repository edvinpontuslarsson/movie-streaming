import { ITrendingMovieItem, IImgConfig } from '../interfaces/apiData';

export default function MoviePoster({
  movie,
  imgConfig,
}: {
  movie: ITrendingMovieItem;
  imgConfig: IImgConfig;
}) {
  // TODO src based on config and movie
  // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  return (
    <div>
      <img
        src={`${imgConfig.secure_base_url}${imgConfig.poster_sizes[1]}/${movie.poster_path}`}
        alt={`Poster for movie ${movie.title}`}
      />
      <p>{movie.title}</p>
    </div>
  );
}
