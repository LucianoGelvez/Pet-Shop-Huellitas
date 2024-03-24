import {  Card, CardActionArea, CardContent, CardMedia, Container, Rating, Typography } from "@mui/material"

const MainCard = ({ image, name, value, price, size }) => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
              {name}
            </Typography>
            {/* <Typography component="legend" textAlign="center">In stock</Typography> */}
            <Rating value={value} disabled sx={{ display: "flex", justifyContent: "center" }} />
            <Typography variant="body2" color="text.secondary" textAlign="center" m={1} fontWeight="800" fontSize="20px">
              $ {price}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" m={1}>
              {size}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}

export default MainCard