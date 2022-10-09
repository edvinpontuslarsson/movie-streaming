import { Typography } from '@mui/material';
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

  const stringInitialPosterSize = imgConfig.poster_sizes[1].split('w')[1];

  const width = parseInt(stringInitialPosterSize);

  return (
    <div
      className="movie-poster-link-wrap"
      style={{ width }}
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
        {true && (
          <div className='movie-poster-more-info'>
            <Typography className="movie-poster-link-text">{movie.title}</Typography>
          </div>
        )}
      </a>
    </div>
  );
}
