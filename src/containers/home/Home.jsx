import './Home.css';
import { Box, Button, Typography } from "@mui/material";
import Slider from "../../components/sliderHome/Slider";
import Dog from '../../images/dog-phone.webp';

const Home = () => {
  return (
    <Box className="container-home" >
      <Slider />
      <Box sx={{ display: { xs: "flex", sm: "none", flexDirection: "column" } }}>
        <img src={Dog} alt="carousel item 1"  style={{ zIndex: 0, height: "100vh", position: 'absolute',top: 0 }} />
        <Typography variant='h1' sx={{
          position: 'absolute',
          fontSize:"50px",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          fontWeight: "800"
          // color: 'red',
        }}> Veterinaria Huellitas</Typography>
        <Typography variant='h5' sx={{
          position: 'absolute',
          top: '58%',
          left: '50%',
          transform: 'translateX(-50%)',
   
        }}>Comida naturar para tu mascota</Typography>
        <Button variant="contained" color="primary" sx={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: "100"
        }}>
          Comprar ahora</Button>
      </Box>


    </Box>
  );
};

export default Home;