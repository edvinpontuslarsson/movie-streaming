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

  console.log(movieListChunks);

  return (
    <>
      {movieListChunks.length > 0 &&
        movieListChunks[chunkIndex].map((item) => (
          <MoviePoster key={item.id} imgConfig={imgConfig} movie={item} />
        ))}
    </>
  );
}
