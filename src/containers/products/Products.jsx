import { Box, Grid, Pagination, PaginationItem, Stack, Typography } from '@mui/material'

import wetCat from '../../images/products/wetcatfoot.webp';
import food from '../../images/food.webp'

import MainCard from '../../components/card/MainCard.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { useState } from 'react';

const Products = () => {

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
    },
    {
      id: 8,
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
    },
    {
      id: 9,
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
    },
    {
      id: 10,
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
    },

    {
      id: 11,
      name: "Webwwwwwwwwwwwwwwww Cat Food",
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
      id: 12,
      name: "Vegetwwwwwwwwwwwwwwwwarian Dog Feed",
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
    },
    {
      id: 18,
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
    },
    {
      id: 19,
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
    },
    {
      id: 20,
      name: "Pup Boostaaaaaaaaaaaaaaaaaaaer",
      value: 5,
      image: wetCat,
      price: 729,
      size: "2kg",
      Nutrition: "Pet Shopper",
      type: "Dog Food",
      Avaliability: true,
      quantity: 99,
      description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },


    ]

  const [page, setPage] = useState(1);
  const productsPerPage = 9;
  const count = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


  const handleChange = (event, value) => {
    setPage(value);

  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "100px" }}>
      <Typography component="h1" variant='h3' mb="50px">Nuestros Productos</Typography>
      <Box sx={{ width: "80vw", margin: "auto", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center", flexDirection: { xs: "column", lg: "row" }, }}>

        <Grid container spacing={{ xs: 1, md: 2 }}>
          {currentProducts.map((product) => (
            <Grid item xs={6} sm={4} md={4} key={product.id}>
              <MainCard image={product.image} name={product.name} value={product.value} price={product.price} size={product.size} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack spacing={2} sx={{ marginTop: "50px" }}>
        <Pagination count={count} color='secondary' page={page} onChange={handleChange} />
      </Stack>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232121" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,192C560,203,640,149,720,144C800,139,880,181,960,170.7C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <Footer />
    </Box>
  )
}

export default Products