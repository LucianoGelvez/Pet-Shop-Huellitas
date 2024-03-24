import './Home.css';
import { Box, Button, Grid, Typography } from "@mui/material";
import Slider from "../../components/sliderHome/Slider";
import Dog from '../../images/dog-phone.webp';
import DogFoot from '../../images/dog-foot.webp';
import CatFoot from '../../images/cat-foot.webp';
import wetCat from '../../images/products/wetcatfoot.webp';
import food from '../../images/food.webp'
import food1 from '../../images/especiales/1.webp'
import food2 from '../../images/especiales/2.webp'
import food3 from '../../images/especiales/3.webp'
import food4 from '../../images/especiales/4.webp'
import food5 from '../../images/especiales/5.webp'
import food6 from '../../images/especiales/6.webp'
import MainCard from '../../components/card/MainCard.jsx';
import Discounts from '../../components/discounts/Discounts.jsx';
import Comments from '../../components/comments/Comments.jsx';
import Brands from '../../components/brands/Brands.jsx';
import Footer from '../../components/footer/Footer.jsx';

const Home = () => {

  const categories = [{
    id: 1,
    image: food1,
    category: "Dog Food",
    brand: ""
  },
  {
    id: 2,
    image: food2,
    category: "Fish Food",
    brand: ""
  },
  {
    id: 3,
    image: food3,
    category: "Rabbit Food",
    brand: ""
  },
  {
    id: 4,
    image: food4,
    category: "Cat Food",
    brand: ""
  },
  {
    id: 5,
    image: food5,
    category: "Bird Food",
    brand: ""
  },
  {
    id: 6,
    image: food6,
    category: "Chemelon Food",
    brand: ""
  },
  ]

  const products =
    [{
      id: 1,
      name: "Web Cat Food",
      value: 4,
      image: wetCat,
      price: 679,
      size: "1kg",
      Nutrition: "Carbohydrates",
      type: "Dog Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },

    {
      id: 2,
      name: "Vegetarian Dog Feed",
      value: 5,
      image: wetCat,
      price: 732,
      size: "2kg",
      Nutrition: "Fats",
      type: "Dog Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },

    {
      id: 3,
      name: "Meat & Rice Food",
      value: 4,
      image: wetCat,
      price: 850,
      size: "1kg",
      Nutrition: "Carbohydrates",
      type: "Dog Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },

    {
      id: 4,
      name: "MFish & Bream",
      value: 3,
      image: wetCat,
      price: 760,
      size: "2kg",
      Nutrition: "Fats",
      type: "Cat Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },

    {
      id: 5,
      name: "Tuna In Jelly",
      value: 3,
      image: wetCat,
      price: 690,
      size: "2kg",
      Nutrition: "Carbohydrates",
      type: "Cat Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },

    {
      id: 6,
      name: "Meat & Rice Food",
      value: 5,
      image: wetCat,
      price: 850,
      size: "1kg",
      Nutrition: "Carbohydrates",
      type: "Dog Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },

    {
      id: 7,
      name: "Pup Booster",
      value: 5,
      image: wetCat,
      price: 729,
      size: "2kg",
      Nutrition: "Pet Shopper",
      type: "Dog Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    }

    ]

  return (
    <Box className="container-home" >
      <Slider />
      <Box sx={{ display: { xs: "flex", sm: "none", flexDirection: "column" } }}>
        <img src={Dog} alt="carousel item 1" style={{ zIndex: 0, height: "100vh", position: 'relative', top: 0 }} />
        <Typography variant='h1' sx={{
          position: 'absolute',
          fontSize: "50px",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: "800",

        }}> Veterinaria Huellitas</Typography>
        <Typography variant='h5' sx={{
          position: 'absolute',
          top: '58%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: "white"
        }}>Comida naturar para tu mascota</Typography>
        <Button variant="contained" color="primary" sx={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: "100",

        }}>
          Comprar ahora</Button>
      </Box>
      <Box className="container-home_accion" >
        <Box>
          <img src={DogFoot} alt="cad's foot" width="650px" height="450px" />
          <Box className="box-imag" sx={{ transform: "translate(150%, -200%)", gap: 5 }}>
            <Typography variant='h4' fontWeight="800" className='h4'>Nutritious Dog Food</Typography>
            <Button sx={{ bgcolor: "#ff6b35", color: 'white' }}>Comprar Ahora</Button>
          </Box>
        </Box>
        <Box>
          <img src={CatFoot} alt="dog's foot" width="650px" height="450px" />
          <Box className="box-imag" sx={{ transform: 'translate(50%, -250%)' }}>
            <Typography variant='h4' fontWeight="800">Nutritious Cat Food</Typography>
            <Button sx={{ bgcolor: "#ff6b35", color: 'white' }}>Comprar</Button>
          </Box>
        </Box>
      </Box>

      <Box width={"80%"} p={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", alignSelf: "center", textAlign: "center" }}>
        <Typography component="h2" variant='h3' mb={5}> Food Categories</Typography>
        <Grid container spacing={{ xs: 1, md: 6 }} columns={{ lg: 24, xs: 4, sm: 8, md: 16 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
          {Array.from(categories).slice(0, 6).map((item, id) => (
            <Grid item xs={12} sm={4} md={4} key={id} sx={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column", alignItems: "center", alignSelf: "center" }} >
              <Box bgcolor="#f36734" borderRadius={30} sx={{ width: "140px", height: "140px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", margin: "auto", backgroundColor: "#f36734" }}>
                <img src={item.image} />
              </Box>
              <Typography variant='p'>{item.category} </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography component="h2" variant='h3' m={5} textAlign={"center"} fontWeight={800}> Best Seller</Typography>
      <Box sx={{ width: "90%", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center", flexDirection: { xs: "column", lg: "row" }, }}>

        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(products).slice(0, 6).map((product) => (
            <Grid item xs={6} sm={4} md={4} key={product.id} sx={{ width: '40%' }}>
              <MainCard image={product.image} name={product.name} value={product.value} price={product.price} size={product.size} />
            </Grid>
          ))}
        </Grid>
        <img className='dog-eating' src={food} alt="" width={""} />
      </Box>
      <Discounts />
      <Comments />
      
      <Brands/>
      <Footer/>
    </Box>
  );
};

export default Home;