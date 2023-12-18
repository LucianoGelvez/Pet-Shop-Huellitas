import { Autocomplete, Box, Grid, Pagination, Slider, Stack, TextField, Typography } from '@mui/material'
import wetCat from '../../images/products/wetcatfoot.webp';
import MainCard from '../../components/card/MainCard.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { useState } from 'react';
import banner from '../../images/pattern-bg.png';

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
  const [search, setSearch] = useState("")
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const minProductPrice = Math.min(...products.map(product => product.price));
  const maxProductPrice = Math.max(...products.map(product => product.price));
  const productsPerPage = 9;


  const handlePriceChange = (event, newValue) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
    setPage(1);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [searchType, setSearchType] = useState(""); // Nuevo estado para el tipo de búsqueda

  const handleTypeChange = (event, value) => {
    setSearchType(value); // Función para actualizar el estado con el tipo seleccionado
    setPage(1);
  };

  // Modifica tu filtro para incluir el nuevo estado de `searchType`
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    product.price >= minPrice &&
    product.price <= maxPrice
  );

  // Filtra por tipo solo si `searchType` no está vacío
  const filteredByType = searchType
    ? filteredProducts.filter((product) =>
      product.type.toLowerCase().includes(searchType.toLowerCase())
    )
    : filteredProducts;

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredByType.slice(indexOfFirstProduct, indexOfLastProduct);
  const count = Math.ceil(filteredByType.length / productsPerPage);

  const handleSearch = (event, value) => {
    setSearch(value);
    setPage(1);
  };


  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
    <Box sx={{ backgroundImage: `url(${banner})`, width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center", mb: "80px", mt:"-60px" }}>
        <Typography component="h1" variant="h2" color="white" textAlign="center"> Nuestros Productos</Typography>
      </Box>
      <Box sx={{ width: "80vw", margin: "auto", display: "flex", justifyContent: "center", alignContent: "center", alignItems: { xs: "center", sm: "flex-start" }, flexDirection: { xs: "column", sm: "column", md: "column", lg: "column", xl: "row" } }}>
        <Box sx={{ width: { sm: "50vw", lg:"30vw", xl: "30%"}, boxShadow: "2px 3px 5px -2px #000000;", display: "flex", flexDirection: "column", alignContent: "center", justifyContent: {xs:"center", sm:"center", xl: "flex-start"}, alignSelf:{sm:"center",md: "center", lg:"center", xl: "flex-start"}, mb:"50px" }}>
          <Typography id="range-slider" m="15px" gutterBottom>
            Filtrar por precio
          </Typography>
          <Slider
            min={minProductPrice}
            max={maxProductPrice}
            value={[minPrice, maxPrice]}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            sx={{ width: "90% ", margin: "auto", mb: 5 }}
          />
          <Autocomplete
            disablePortal
            id="search-product"
            options={products.map((product) => product.name)} // Genera las opciones a partir de los nombres de los productos
            sx={{ width: 300, margin: "auto", mb: 5 }}
            onInputChange={handleSearch} // Usa la prop onInputChange para manejar la búsqueda
            renderInput={(params) => <TextField {...params} label="Buscar Producto" />}
          />
          <Autocomplete
            disablePortal
            id="filter-by-type" // Cambia el id para que sea único
            options={[...new Set(products.map((product) => product.type))]} // Filtra categorías duplicadas
            sx={{ width: 300, margin: "auto", mb: 5 }}
            onInputChange={handleTypeChange} // Actualizado para usar handleTypeChange
            renderInput={(params) => <TextField {...params} label="Buscar por Categoría" />}
          />
        </Box>
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ display: "flex", justifyContent: "center" }}>
          {currentProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <MainCard image={product.image} name={product.name} value={product.value} price={product.price} size={product.size} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack spacing={2} sx={{ marginTop: "50px" }}>
        <Pagination
          count={count}             // Actualizado para reflejar el número correcto de páginas
          color='secondary'
          page={page}
          onChange={handleChange}
        />

      </Stack>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232121" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,192C560,203,640,149,720,144C800,139,880,181,960,170.7C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <Footer />
    </Box>
  )
}

export default Products