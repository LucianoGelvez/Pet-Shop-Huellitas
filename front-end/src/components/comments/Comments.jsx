import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Comments.css'
import { Box, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import maria from '../../images/maria.jpg'
import anna from '../../images/anna.jpg'
import jhon from '../../images/jhon.jpg'
import quote from '../../images/quote.webp'

const Comments = () => {

    const Img = styled("img")({
        width: 150,
        objectFit: "container",
        objectPosition: "center",
        overflow: "hidden",
    })

    const petShopComments = [
        {
            name: 'Maria',
            img: maria,
            comment: 'I love this pet shop. I always find the best food for my dog, and the staff is very friendly.'
        },
        {
            name: 'John',
            img: jhon,
            comment: 'I have bought toys and accessories for my cat at this store. They have a great variety, and the prices are reasonable.'
        },
        {
            name: 'Anna',
            img: anna,
            comment: 'The pet shop has an incredible section of products for bird care. I bought a beautiful cage for my parrots, and they are happy.'
        }
    ];

    const responsive = {

        superLargeDesktop: {

            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1024, min: 901 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 900, min: 481 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,

        }
    };


    return (
        <div>
            <Carousel arrows={true} className='slider-monturas-container-main' responsive={responsive}>
                {petShopComments.map((person, index) =>
                    <Paper key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding:{xs: 0, md: "80px"}, overflow: "hidden", mt: 5, flexDirection: {xs: "column", md: "row"} } }>
                        <Box  sx={{overflow: "hidden", width: "340px", display: "flex", justifyContent:"center", borderRadius: "50px 80px 40px 50px"}}>
                        <Img src={person.img} m="0" backgroundColor="red" alignItems= "center" />
                        </Box>
                        <Box>
                            <Typography variant="p" component="h2" m={2}>{person.name}</Typography>
                            <Typography variant="p" component="h3" fontWeight="500">{person.comment}</Typography>
                        </Box>
                        <Box  sx={{overflow: "hidden", width: "80px", display: "flex", justifyContent:"center",}}>
                        <Img src={quote} m="0" alignItems= "center" />
                        </Box>
                    </Paper>
                )
                }
            </Carousel>;
        </div>
    )
}

export default Comments