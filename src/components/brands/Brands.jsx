import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import '../comments/Comments.css'
import { Box, Paper } from "@mui/material";
import styled from "@emotion/styled";
import curiouscat from '../../images/brands/curiouscat.webp'
import dadadog from '../../images/brands/dadadog.webp'
import dog_cat from '../../images/brands/dog_cat.webp'
import dog_cat2 from '../../images/brands/dog_cat2.webp'
import dogbone from '../../images/brands/dogbone.webp'
import dogbox from '../../images/brands/dogbox.webp'
import dogmountains from '../../images/brands/dogmountains.webp'


const Brands = () => {

    const Img = styled("img")({
        width: "200px",
        objectFit: "container",
        objectPosition: "center",
        overflow: "hidden",
        background: "#ffc312",

    })

    const petShopComments = [
        {
            id: 1,
            img: curiouscat,
        },
        {
            id: 2,
            img: dadadog,
        },
        {
            id: 3,
            img: dog_cat,
        },
        {
            id: 4,
            img: dog_cat2,
        },
        {
            id: 5,
            img: dogbone,
        },
        {
            id: 6,
            img: dogbox,
        },
        {
            id: 7,
            img: dogmountains,
        }
    ];

    const responsive = {

        superLargeDesktop: {

            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 901 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 900, min: 481 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,

        }
    };


    return (
        <div style={{ width: "100%", backgroundColor: "#ffc312"}}>
            <Carousel style={{ width: "50vw" }} width="500px" arrows={true} responsive={responsive}>
                {petShopComments.map((person, id) =>
                    <Box key={id} sx={{ overflow: "hidden", display: "flex", justifyContent: "center",marginTop: "50px" }}>
                        <Img src={person.img} m="0" backgroundColor="#ffc312" alignItems="center" />
                    </Box>

                )
                }
            </Carousel>;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232121" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,192C560,203,640,149,720,144C800,139,880,181,960,170.7C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>  </div>
    )
}

export default Brands