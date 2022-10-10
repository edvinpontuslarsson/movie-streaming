import { useState } from 'react';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { IPosterImageConfig, ITrendingMediaItem } from '../interfaces/apiData';
import MoviePoster from './MoviePoster';

export default function MovieList({
  movieListChunks,
  imgConfig,
}: {
  movieListChunks: ITrendingMediaItem[][];
  imgConfig: IPosterImageConfig;
}) {
  const [movieChunkIndex, setMovieChunkIndex] = useState(0);

  return (
    <div className="movie-section">
      <div className="movie-list-slide-wrap">
        {movieChunkIndex > 0 && (
          <IconButton
            onClick={() => {
              // slide back to previous movie posters
              const newIndex = movieChunkIndex - 1;
              setMovieChunkIndex(newIndex >= 0 ? newIndex : 0);
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}
      </div>

      {movieListChunks.length > 0 &&
        movieListChunks[movieChunkIndex].map((item) => (
          <MoviePoster key={item.id} imgConfig={imgConfig} movie={item} />
        ))}
        
      <div className="movie-list-slide-wrap">
        {movieChunkIndex !== movieListChunks.length - 1 && (
          <IconButton
            onClick={() => {
              // slide forward to next movie posters
              const newIndex = movieChunkIndex + 1;
              setMovieChunkIndex(
                newIndex <= movieListChunks.length - 1
                  ? newIndex
                  : movieListChunks.length - 1
              );
            }}
          >
            <ChevronRight />
          </IconButton>
        )}
      </div>
    </div>
  );
}
