import { Box, Typography } from "@mui/material";
import banner from '../../images/pattern-bg.png';
import email from '../../images/icons/email-contact.png';
import phone from '../../images/icons/phone-contact.png';
import adress from '../../images/icons/adress.png';
// import { Formik } from "formik";
import Form from "../../components/form/Form";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center",flexDirection: "column", alignItems: "center"}}>
      <Box sx={{ backgroundImage: `url(${banner})`, width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-60px" }}>
        <Typography component="h1" variant="h2" color="white" textAlign="center"> Contactanos</Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: "50px", width: "60vw", margin: "auto", marginTop: "4%" }}>
        <Box sx={{ backgroundColor: "#ffe8c0", borderRadius: "20px", height: "220px", padding: "20px" }}>
          <img src={email} alt="email" style={{ margin: "8px", width: "60px" }} />
          <Typography variant="h5">Teléfono</Typography>
          <Typography>0000 - 123 - 456789</Typography>
          <Typography>0000 - 123 - 456789</Typography>
        </Box>
        <Box sx={{ backgroundColor: "#ffe8c0", borderRadius: "20px", padding: "20px" }}>
          <img src={phone} alt="phone" style={{ margin: "8px", width: "60px" }} />
          <Typography variant="h5">Email</Typography>
          <Typography>info@example.com</Typography>
          <Typography>support@example.com</Typography>
        </Box>
        <Box sx={{ backgroundColor: "#ffe8c0", borderRadius: "20px", padding: "20px" }}>
          <img src={adress} alt="adress" style={{ margin: "8px", width: "60px" }} />
          <Typography variant="h5">Dirección</Typography>
          <Typography>No: 58 A, East Madison Street,</Typography>
          <Typography>Baltimore, MD, USA 4508</Typography>
        </Box>
      </Box>
      <Box sx={{display: {xs: "column", md:"flex"}, justifyContent:"center", alignItems:"center", width:"60vw", marginTop:"80px"}}>
        <Box sx={{width:"100%", display:"flex", justifyContent: "center"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.8018674087293!2d-68.77672812354295!3d-32.982628773578476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0d5d5a15eca7%3A0x3b781edfcc452d70!2sHuellitas%20(Peluqueria%20Canina%2C%20Petshop)!5e0!3m2!1ses-419!2sar!4v1711237701588!5m2!1ses-419!2sar" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        <Box sx={{width:"100%"}}>
        <Form/>
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232121" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,192C560,203,640,149,720,144C800,139,880,181,960,170.7C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <Footer/>
    </Box>
  );
}

export default Contact;
