// docs
// https://developers.themoviedb.org/3/getting-started/introduction

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

export const getTrendingMovies = (timeWindow: 'day' | 'week' = 'day') => {
  return new Promise(async (resolve) => {
    try {
      const payload = await window.fetch(
        `${apiURL}/trending/movie/${timeWindow}?api_key=${apiKey}`
      );
      const data = await payload.json();

      resolve(data);
    } catch (error) {
      resolve([]);
    }
  });
};
