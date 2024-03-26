import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './ProductDetail.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import wetCat from '../../images/products/wetcatfoot.webp';
import chewy from '../../images/products/chewy.webp';
import milkbone from '../../images/products/milkbone.webp';
import finefood from '../../images/products/finefood.webp';
import Footer from '../../components/footer/Footer';
import { Box, Button, Typography } from '@mui/material';

const ProductDetail = () => {


    const { id } = useParams()
    const numericId = Number(id);
    // const [productItem, setProduct] = useState([]);
    // const [images, setImages] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const products = [{
        id: 1,
        name: "Web Cat Food",
        value: 4,
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        name: "Web Cat Food",
        value: 4,
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        name: "Vegetwarian Dog Feed",
        value: 5,
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: { wetCat: wetCat, chewy: chewy, finefood: finefood, milkbone: milkbone },
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
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
        name: "Pup Booster",
        value: 5,
        image: [{ original: wetCat, thumbnail: wetCat }, { original: chewy, thumbnail: chewy }, { original: finefood, thumbnail: finefood }, { original: milkbone, thumbnail: milkbone }],
        price: 729,
        size: "2kg",
        Nutrition: "Pet Shopper",
        type: "Dog Food",
        Avaliability: true,
        quantity: 99,
        description: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis."
    },

    ]


    // useEffect(() => {
    //     const getProduct = JSON.parse(localStorage.getItem('cartItems')) || [];
    //     setCartItems(getProduct);
    //     const url = baseUrl.url + `/products/${id}`
    //     const detalleDelProducto = async () => {
    //         try {
    //             const data = await fetch(url)
    //             const product = await data.json()
    //             setProduct(product)
    //             setImages(product.images)
    //         }
    //         catch (error) {
    //             console.log("Error");
    //         }
    //     }

    //     detalleDelProducto();

    // }, [])

    const responsive = {

        mobile: {
            breakpoint: { max: 610, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const carrito = (item, count) => {
        const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItemIndex = cartItemsFromStorage.findIndex((i) => i.id === item.id);
        if (existingItemIndex !== -1) {

            cartItemsFromStorage[existingItemIndex].amount += count;
        } else {
            cartItemsFromStorage.push({
                ...item,
                amount: count
            });
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItemsFromStorage));
        setCartItems(cartItemsFromStorage);
    };

    const productItem = products.find(product => product.id === numericId);
    if (!productItem) {
        return <div>Producto no encontrado</div>;
    }

    const imagenes = productItem.image;
    const images = productItem.image.map(img => img.original);

    return (
        <Box>
            <Box className='container-prododuct'>
                <Box className='container-prododuct-detail'>
                    <Box className='container-slider'>
                        <Carousel responsive={responsive} className='container-slider-carousel' >
                            {images.slice(0, 5).map((item, id) => (
                                <article key={id} className='container-slider-carousel_card'>
                                    <img src={item.original} className='container-slider-carousel_card_img'></img>
                                </article>
                            ))}
                        </Carousel>
                    </Box>
                    <Box className='container-prododuct-detail_images'>
                        <ImageGallery
                            items={imagenes}
                            showPlayButton={false}
                            showFullscreenButton={true}
                            showThumbnails={true}
                            thumbnailPosition='left'
                            slideOnThumbnailOver={false}
                            showIndex={true}
                            useTranslate3D={true}
                            disableThumbnailScroll={true}
                            disableSwipe={true}
                        />
                    </Box>
                    <Box className='container-prododuct-detail_info'>
                        <Typography variant='h2' component="h1">{productItem.name}</Typography>
                        <Typography variant='h6' component="p">{productItem.description}</Typography>
                        <strong className='container-prododuct-detail_info_price'>$ {productItem.price}</strong>
                        <Box className='container-prododuct-detail_info_card'>
                            <Box className="container-prododuct-detail_info_card_product">
                                <button className="rest" onClick={() => { if (count > 1) { setCount(count - 1) } }}> - </button>
                                <span className="cart-product-quantity">{count}</span>
                                <button className="plus" onClick={() => { setCount(count + 1) }}> + </button>
                            </Box>
                            <Button className='addCard' onClick={() => carrito(productItem, count)}>Añadir al carrito</Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232121" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,192C560,203,640,149,720,144C800,139,880,181,960,170.7C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <Footer />
        </Box>
    )
}

export default ProductDetail