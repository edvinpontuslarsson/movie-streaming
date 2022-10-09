import { useState } from 'react';
import { ITrendingMovieItem, IImgConfig } from '../interfaces/apiData';

export default function MoviePoster({
  movie,
  imgConfig,
}: {
  movie: ITrendingMovieItem;
  imgConfig: IImgConfig;
}) {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="movie-poster-link-wrap"
      onMouseEnter={() => setOnHover(true)}
      onFocus={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onBlur={() => setOnHover(false)}
    >
      <a href="#!">
        <img
          src={`${imgConfig.secure_base_url}${imgConfig.poster_sizes[1]}/${movie.poster_path}`}
          alt={`Poster for movie ${movie.title}`}
        />
        {onHover && <p className="movie-poster-link-text">{movie.title}</p>}
      </a>
    </div>
  );
}
