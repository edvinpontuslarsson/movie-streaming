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
  const [chunkIndex, setChunkIndex] = useState(0);

  return (
    <div className="movie-section">
      <div className="movie-list-slide-wrap">
        {chunkIndex > 0 && (
          <IconButton
            onClick={() => {
              const newIndex = chunkIndex - 1;
              setChunkIndex(newIndex >= 0 ? newIndex : 0);
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}
      </div>
      {movieListChunks.length > 0 &&
        movieListChunks[chunkIndex].map((item) => (
          <MoviePoster key={item.id} imgConfig={imgConfig} movie={item} />
        ))}
      <div className="movie-list-slide-wrap">
        {chunkIndex !== movieListChunks.length - 1 && (
          <IconButton
            onClick={() => {
              const newIndex = chunkIndex + 1;
              setChunkIndex(
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
