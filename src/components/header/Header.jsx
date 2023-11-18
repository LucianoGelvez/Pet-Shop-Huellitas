import NavListDraver from "./NavListDrawer"
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/icons/pet.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Header = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    {
      title: "Inicio", path: "/"
    },
    {
      title: "Servicios", path: "/Servicios"
    },
    {
      title: "Productos", path: "/Productos"
    },
    {
      title: "Contacto", path: "/Contacto"
    }
   
  ]
  return (
    <>
      <AppBar >
        <Toolbar sx={{ justifyContent: 'space-around' }}>
          <Avatar alt="Logo" src={Logo} />
          <IconButton sx={{ display: { xs: "flex", sm: "none" } }} color="inherit" size="large">
            <MenuIcon onClick={() => setOpen(true)} />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navLinks.map((link, index) =>
              <Button sx={{ m: "10px", fontWeight: "500", fontSize: "18px" }} key={index} color="inherit" component={NavLink} to={link.path}>{link.title}</Button>)}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex",  alignItems: "center" } }}>
            <IconButton>
              <ShoppingCartOutlinedIcon sx={{ backgroundColor: "inherit" }} color="inherit" />
            </IconButton>
            <Typography component="a" sx={{ fontWeight: "bold" }} > Luiz</Typography>
          </Box>

        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>

        <NavListDraver setOpen={setOpen} sx={{ display: { xs: "flex", sm: "none" } }} navLinks={navLinks} />

      </Drawer>
    </>
  )
}

export default Header