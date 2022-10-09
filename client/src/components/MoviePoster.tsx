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
    <div>
      <a
        href="#!"
        onMouseEnter={() => setOnHover(true)}
        onFocus={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onBlur={() => setOnHover(false)}
      >
        <img
          src={`${imgConfig.secure_base_url}${imgConfig.poster_sizes[1]}/${movie.poster_path}`}
          alt={`Poster for movie ${movie.title}`}
        />
        {onHover && <p className="movie-poster-link">{movie.title}</p>}
      </a>
    </div>
  );
}
