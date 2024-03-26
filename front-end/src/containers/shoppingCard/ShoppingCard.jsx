import { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, Typography, Box, Container } from '@mui/material';
import banner from '../../images/pattern-bg.png';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(cartItemsFromStorage);
    }, []);

    const removeFromCart = (itemToRemove) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const total = cartItems.reduce((total, item) => total + item.price * item.amount, 0);

    const orderNow = () => {
        let message = 'Pedido:';
        cartItems.forEach(item => {
            message += `%0A${item.name}: $${item.price} x ${item.amount}`;
        });
        message += `%0ATotal: $${total}`;
        const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };


    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${banner})`, width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-60px" }}>
                <Typography component="h1" variant="h2" color="white" textAlign="center"> Carrito</Typography>
            </Box>
            <Container sx={{ width: '40%', maxWidth: 360, bgcolor: 'background.paper', marginTop: "50px" }}>
                {(cartItems != 0 && cartItems != null && cartItems != {}) ? <List>
                    {cartItems.map((item, index) => (
                        <ListItem sx={{ boxShadow: "0px 5px 5px 0.1px", m: 5 }} key={index} secondaryAction={
                            <Button variant="contained" color="secondary" onClick={() => removeFromCart(item)}>
                                Eliminar
                            </Button>
                        }>
                            <ListItemText
                                primary={item.name}
                                secondary={`Cantidad: ${item.amount}, Precio: $${item.price}`}
                            />
                        </ListItem>
                    ))}
                    <Typography variant="h5" component="div" gutterBottom>
                        Total: $ {total}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={orderNow}>
                        Pedir ahora
                    </Button>
                </List> :
                    <Typography variant="h3">No se han halladido productos al carrito</Typography>}

            </Container>
        </Box>
    );
};

export default ShoppingCart;
