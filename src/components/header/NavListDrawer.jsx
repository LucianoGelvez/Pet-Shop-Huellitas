import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, } from "@mui/material";
import { NavLink } from 'react-router-dom'

const NavListDraver = ({ navLinks, setOpen }) => {

    return (
        <Box sx={{ width: 250 }}>
            <Divider />
            <List>
                {navLinks.map(link =>
                    <ListItem disablePadding key={link.title}>
                        <ListItemButton component={NavLink} 
                        to={link.path} onClick={()=> setOpen(false)}>{link.title}

                        </ListItemButton>

                    </ListItem>

                )}
                 <ListItemButton component={NavLink} 
                        to="/Carrito" onClick={()=> setOpen(false)}>Carrito

                        </ListItemButton>
            </List>
        </Box>
    )
}
export default NavListDraver;