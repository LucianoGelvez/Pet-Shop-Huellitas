import { Container } from '@mui/material'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Products from './containers/products/Products'
import Header from './components/header/Header'
import Home from './containers/home/Home'
import Services from './containers/services/Services'
import Products from './containers/products/Products'
import Contact from './containers/contact/Contact'

function App() {

  return (
    <BrowserRouter>
    <Container sx={{mt: 5}}>
      <Header/>
    </Container>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Servicios' element={<Services/>} />
      <Route path='/Productos' element={<Products/>} />
      <Route path='/Contacto' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
