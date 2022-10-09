import { ITrendingMediaItem } from '../interfaces/apiData';

export const chunkArray = (
  itemsPerChunk: number,
  items: ITrendingMediaItem[]
): ITrendingMediaItem[][] => {
  const chunks = [];

  for (let i = 0; i < items.length; i += itemsPerChunk) {
    const chunk = items.slice(i, i + itemsPerChunk);
    chunks.push(chunk);
  }

  return chunks;
};
