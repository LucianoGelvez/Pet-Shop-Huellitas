import { Container } from '@mui/material'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Products from './containers/products/Products'
import Header from './components/header/Header'
import Home from './containers/home/Home'
import Services from './containers/services/Services'
import Products from './containers/products/Products'
import Contact from './containers/contact/Contact'
// import ProductList from './components/productList/ProductList'
import Footer from './components/footer/Footer'

function App() {

  // const products = [
  //   { id: 1, name: 'Producto 1' },
  //   { id: 2, name: 'Producto 2' },
  //   // ...otros productos
  // ];

  return (
    <BrowserRouter>
      <Container sx={{ mt: 5 }}>
        <Header />
        {/* <ProductList products={products}/> */}

      </Container>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Servicios' element={<Services />} />
        <Route path='/Productos' element={<Products />} />
        <Route path='/Contacto' element={<Contact />} />
      </Routes>
  
    </BrowserRouter>
  )
}

export default App
