import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { ITrendingMovieItem, IImgConfig } from '../interfaces/apiData';

export default function MoviePoster({
  movie,
  imgConfig,
}: {
  movie: ITrendingMovieItem;
  imgConfig: IImgConfig;
}) {
  const stringInitialPosterSize = imgConfig.poster_sizes[1].split('w')[1];
  const width = parseInt(stringInitialPosterSize);

  return (
    <Card>
      <CardActionArea>
        {/* <img
          src={`${imgConfig.secure_base_url}${imgConfig.poster_sizes[2]}/${movie.poster_path}`}
          alt={`Poster for movie ${movie.title}`}
        /> */}
        <CardMedia
          component="img"
          width={width}
          height={225}
          image={`${imgConfig.secure_base_url}${imgConfig.poster_sizes[1]}/${movie.poster_path}`}
          alt={`Poster for movie ${movie.title}`}
        />
      </CardActionArea>
    </Card>
  );
}
