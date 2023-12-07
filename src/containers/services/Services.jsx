import { Avatar, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import pets from '../../images/pets.png'
import medicine from '../../images/medicine.jpg'
import banner from '../../images/pattern-bg.png'
import './Service.css'
// import ControlledAccordions from "../../components/accordion/Accordion"
import CustomizedAccordions from "../../components/accordion/Accordion"
import Footer from "../../components/footer/Footer"

const Services = () => {



  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-60px" }}>
      <Box sx={{backgroundImage: `url(${banner})` ,width: "100%", backgroundColor: "#232121", display: "flex", flexDirection:{xs: "column" ,md: "row"}, justifyContent: "space-evenly", alignItems: "center", height: "400px" }}>
        <Box>
          <Typography variant="h1" color="white"> Servicios</Typography>
        </Box>
        <Box>
          <img src={pets} alt="" />
        </Box>
      </Box>
      <Box sx={{ width: {xs: "100vw", md:"70vw"}, display: "flex", justifyContent: {sx: "center", md: "space-evenly"}, alignItems:"center", margin: {xs:"20px", md:"50px"}, flexDirection:{xs: "column" ,md: "row"} }}>
        <Box p="30px">
          <Typography component="h2" m="10px" variant="h4">CLÍNICA VETERINARIA</Typography>
          <Typography fontSize="20px" variant="p">Huellitas a renowned team of Veterinary Professionals with extensive experience, specializing in various areas of canine and feline medicine. Additionally, our facilities are modern and well-equipped.

            Our main objective is to maintain the health and well-being of animals and assist them in recovering when they are ill.

            The clinic is specially adapted to the needs of each patient who visits us. For canines, we have a fully equipped specific consultation area designed with the specific needs of the species in mind.

            For felines, there is a dedicated consultation area for cats, separated from the common area to avoid waiting times and thus reduce stress levels during the visit. We also have an exclusive Cat Friendly consulting room.</Typography>
        </Box>
        <Box sx={{ borderRadius: "30px" }}>
          <img  style={{ borderRadius: "30px", width:"500px" }} src={medicine} alt="" />
        </Box>
      </Box>
      <Box>
        <Typography component="h2" variant="h4" textAlign="center">SERVICIOS MÉDICOS</Typography>
        
        <Typography sx={{margin:"10px", width: {xs: "90vw", md:"80vw"}}}>En Huellitas contamos con un excelente equipo de médicos veterinarios preparados para brindarle a tu mascota la mejor atencion</Typography>
        {/* sx={{marginTop:"10px", width:{xs: "90vw", md:"80vw"}}} */}
        <CustomizedAccordions />
      </Box>
      <Box>
        <Typography component="h2" variant="h4" textAlign="center" m="45px">Nuestro equipo medico</Typography>
      <Stack flexDirection={{sx: "column", md: "row"}} spacing={5} alignItems="center" alignContent="center" justifyContent="center">
      <Avatar sx={{width: "150px", height: "150px"}} alt="Remy Sharp" src="https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100227.jpg?w=1380&t=st=1701951441~exp=1701952041~hmac=9e70b8a7ceefa42faeedee8b28d00ed24d845442e893306baf38e673a829c722" />
      <Avatar sx={{width: "150px", height: "150px"}} alt="Travis Howard" src="https://img.freepik.com/foto-gratis/veterinario-bata-laboratorio-pie-establo_1303-31036.jpg?w=1380&t=st=1701951492~exp=1701952092~hmac=c152bc40887a37f5e44abdf8ad155da44750b0452d7885a28f15ca77a52b9e35" />
      <Avatar sx={{width: "150px", height: "150px"}} alt="Cindy Baker" src="https://img.freepik.com/foto-gratis/veterinario-sexo-femenino-feliz-perro-tabla-que-muestra-muestra-thumbup_23-2147928397.jpg?w=740&t=st=1701951537~exp=1701952137~hmac=66a298f72b39d8f8a8df5f95b481f6ad8f3cd85611c842ccb7d953075fa6a0a7" />
      <Avatar sx={{width: "150px", height: "150px"}} alt="Cindy Baker" src="https://img.freepik.com/foto-gratis/veterinario-tiro-medio-lindo-perro_23-2149143863.jpg?w=1380&t=st=1701951702~exp=1701952302~hmac=b03300b19b1d7728e1f55b6d446877b1a9747881f57c6a184b1491170df0a065" />
    </Stack>
     </Box>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232121" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,192C560,203,640,149,720,144C800,139,880,181,960,170.7C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <Footer/>
    </Box>
  )
}

export default Services