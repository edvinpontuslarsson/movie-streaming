import { ITrendingMovieItem, IImgConfig } from '../interfaces/apiData';

export default function MoviePoster({
  movie,
  imgConfig,
}: {
  movie: ITrendingMovieItem;
  imgConfig: IImgConfig;
}) {
  return (
    <a href='#'>
      <img
        src={`${imgConfig.secure_base_url}${imgConfig.poster_sizes[1]}/${movie.poster_path}`}
        alt={`Poster for movie ${movie.title}`}
      />
      <p>{movie.title}</p>
    </a>
  );
}
