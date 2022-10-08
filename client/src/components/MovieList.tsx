import { IImgConfig, ITrendingMovieItem } from '../interfaces/apiData';
import MoviePoster from './MoviePoster';

export default function MovieList({
  movies,
  imgConfig,
}: {
  movies: ITrendingMovieItem[];
  imgConfig: IImgConfig;
}) {
  /**
   * This function reuses code from this StackOverflow answer:
   * https://stackoverflow.com/a/37826698/9374593
   */
  const chunkArray = (itemsPerChunk: number, inputArray: any[]) => {
    const result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / itemsPerChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    return result;
  };

  return (
    <>
      {movies.map((item) => (
        <MoviePoster imgConfig={imgConfig} movie={item} />
      ))}
    </>
  );
}
