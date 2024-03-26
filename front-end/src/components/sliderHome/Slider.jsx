import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Dog from '../../images/dog.webp'
import Cat from '../../images/cat.webp'
import Chameleon from '../../images/chameleon.webp'
import './SliderStyle.css'
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Slider = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/Productos');
  };

  return (
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={5000}
        transitionTime={1000}
        showIndicators={true}
        swipeable={true}
      >
        <Box className="carousel-item">
          <img src={Dog} alt="carousel item 1" />
          <Box className="carousel-item-content description1">
            <Typography variant='h1'>Veterinaria Huellitas</Typography>
            <Typography variant='h4'>Descripción del slide</Typography>
            <Button sx={{color:"white"}} onClick={handleClick}>Comprar ahora</Button>
          </Box>
        </Box>
        <Box className="carousel-item ">
          <img src={Cat} alt="carousel item 2 " />
          <Box className="carousel-item-content description2">
            <Typography variant='h1'>Veterinaria Huellitas</Typography>
            <Typography variant='h4'>Haz que crezca fuerte y saludable.</Typography>
            <Button sx={{color:"white"}} onClick={handleClick}>Comprar ahora</Button>
          </Box>
        </Box>
        <Box className="carousel-item ">
          <img src={Chameleon} alt="carousel item 3 " />
          <Box className="carousel-item-content description3">
            <Typography variant='h1' className='titulo'>Veterinaria Huellitas</Typography>
            <Typography variant='h4' className='sentence'>Nos ocupamos del bienestar de tu mascota</Typography>
            <Button sx={{color:"white"}} onClick={handleClick}>Comprar ahora</Button>
          </Box>
        </Box>
      </Carousel>
    );
};

export default Slider