import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

import paris from 'assets/img/Paris.jpg'
import paris2 from 'assets/img/Paris2.jfif'
import malta from 'assets/img/Malta.jpg'
import amiens from 'assets/img/amiens2.jpg'
import pompidou from 'assets/img/pompidou.JPG'
import bleus from 'assets/img/bleus.jfif'
import istambul from 'assets/img/Istambul.jpg'
import london from 'assets/img/London.jpg'
import athens from 'assets/img/Athens.jpg'
import commerce from 'assets/img/bourse_de_commerce.jpg'
import orchestra from 'assets/img/Orchestra.jpg'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const StyledRating = styled(Rating)({
  paddingRight: '10px',
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const ProjectCard = (props) => {

  let { subtitle, year, description, place, stars, code, title, role } = props

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const providePhoto = (code) => {

    switch (code) {
      case 'UBP':
        return paris2
      case 'ITM':
        return pompidou
      case 'FUS':
        return bleus
      case 'PIC':
        return amiens
      case 'HER':
        return paris
      case 'IST':
        return istambul
      case 'LON':
        return london
      case 'ATH':
        return athens
      case 'MAL':
        return malta
      case 'CCF':
        return commerce
      case 'ORQ':
        return orchestra

      default:
        return null

    }
  }


  return (
    <Card className="project-item">
      <CardHeader

        title={title}
        subheader={subtitle}

      />
      <CardMedia className='images'
        component="img"
        height="194"
        image={providePhoto(code)}
        alt="alt"
      />

      <CardActions disableSpacing>
    
        <StyledRating
          className="styled-rating"
          name="customized-color"

          value={stars}
          readOnly
          size='small'
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.25}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />

        {role}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
          <Typography paragraph>
            {place + ',' + year}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProjectCard