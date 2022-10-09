import { ITrendingMovieItem } from '../interfaces/apiData';

export const chunkArray = (
  itemsPerChunk: number,
  items: ITrendingMovieItem[]
): ITrendingMovieItem[][] => {
  const chunks = [];

  for (let i = 0; i < items.length; i += itemsPerChunk) {
    const chunk = items.slice(i, i + itemsPerChunk);
    chunks.push(chunk);
  }

  return chunks;
};
