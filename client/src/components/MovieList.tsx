import { useState } from 'react';
import { IImgConfig, ITrendingMovieItem } from '../interfaces/apiData';
import MoviePoster from './MoviePoster';

export default function MovieList({
  movieListChunks,
  imgConfig,
}: {
  movieListChunks: ITrendingMovieItem[][];
  imgConfig: IImgConfig;
}) {
  const [chunkIndex, setChunkIndex] = useState(0);

  return (
    <div className="movie-section">
      <div>
        {chunkIndex > 0 && (
          <button
            onClick={() => {
              const newIndex = chunkIndex - 1;
              setChunkIndex(newIndex >= 0 ? newIndex : 0);
            }}
          >
            Prev
          </button>
        )}
      </div>
      <div>
        {movieListChunks.length > 0 &&
          movieListChunks[chunkIndex].map((item) => (
            <MoviePoster key={item.id} imgConfig={imgConfig} movie={item} />
          ))}
      </div>
      <div>
        {chunkIndex !== movieListChunks.length - 1 && (
          <button
            onClick={() => {
              const newIndex = chunkIndex + 1;
              setChunkIndex(
                newIndex <= movieListChunks.length - 1
                  ? newIndex
                  : movieListChunks.length - 1
              );
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
