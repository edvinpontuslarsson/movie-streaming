// docs
// https://developers.themoviedb.org/3/getting-started/introduction

import { IAPIConfig, ITrendingMedia } from '../interfaces/apiData';

const apiURL = 'https://api.themoviedb.org/3/';
const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

export const getAPIConfig = (): Promise<null | IAPIConfig> =>
  new Promise(async (resolve) => {
    try {
      const payload = await window.fetch(
        `${apiURL}configuration?api_key=${apiKey}`
      );
      const data = await payload.json();

      resolve(data);
    } catch (error) {
      resolve(null);
    }
  });

export const getTrendingMediaItems = (
  timeWindow: 'day' | 'week' = 'day'
): Promise<ITrendingMedia> => {
  return new Promise(async (resolve) => {
    try {
      const payload = await window.fetch(
        `${apiURL}trending/all/${timeWindow}?api_key=${apiKey}`
      );
      const data: ITrendingMedia = await payload.json();

      resolve(data);
    } catch (error) {
      resolve({ results: [] });
    }
  });
};
