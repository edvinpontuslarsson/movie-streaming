import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import { ITrendingMovieItem, IImgConfig } from '../interfaces/apiData';

export default function MoviePoster({
  movie,
  imgConfig,
}: {
  movie: ITrendingMovieItem;
  imgConfig: IImgConfig;
}) {
  const [onHover, setOnHover] = useState(false);

  const stringInitialPosterSize = imgConfig.poster_sizes[1].split('w')[1];

  const width = parseInt(stringInitialPosterSize);

  // import * as React from 'react';
  // import Card from '@mui/material/Card';
  // import CardContent from '@mui/material/CardContent';
  // import CardMedia from '@mui/material/CardMedia';
  // import Typography from '@mui/material/Typography';
  // import { CardActionArea } from '@mui/material';

  // export default function ActionAreaCard() {
  //   return (
  //     <Card sx={{ maxWidth: 345 }}>
  //       <CardActionArea>
  //         <CardMedia
  //           component="img"
  //           height="140"
  //           image="/static/images/cards/contemplative-reptile.jpg"
  //           alt="green iguana"
  //         />
  //         <CardContent>
  //           <Typography gutterBottom variant="h5" component="div">
  //             Lizard
  //           </Typography>
  //           <Typography variant="body2" color="text.secondary">
  //             Lizards are a widespread group of squamate reptiles, with over 6,000
  //             species, ranging across all continents except Antarctica
  //           </Typography>
  //         </CardContent>
  //       </CardActionArea>
  //     </Card>
  //   );
  // }

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
