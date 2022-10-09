import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { ITrendingMediaItem, IImgConfig } from '../interfaces/apiData';

export default function MoviePoster({
  movie,
  imgConfig,
}: {
  movie: ITrendingMediaItem;
  imgConfig: IImgConfig;
}) {
  const stringInitialPosterSize = imgConfig.poster_sizes[1].split('w')[1];
  const width = parseInt(stringInitialPosterSize);

  return (
    <Card>
      <CardActionArea>
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
