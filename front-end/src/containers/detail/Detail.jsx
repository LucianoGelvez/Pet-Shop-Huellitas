// import { useEffect, useState } from 'react'
// import './Detail.css'
// import Button from '@mui/material/Button';
// import ReactImageMagnify from 'react-image-magnify';
// import { Avatar, Box, Container, Grid, List, ListItem, ListItemText, Skeleton, Typography } from '@mui/material';
// import box from '../../images/icons/caja.webp'
// import colorIcon from '../../images/icons/colorIcon.webp'
// import calendarIcon from '../../images/icons/calendarIcon.webp'
// import weightIcon from '../../images/icons/weightIcon.webp'
// import brandIcon from '../../images/icons/brandIcon.webp'
// import billIcon from '../../images/icons/billIcon.webp'
// import bicycleIcon from '../../images/icons/bicycleIcon.webp'
// import clothingIcon from '../../images/icons/clothingIcon.webp'
// import accesoryIcon from '../../images/icons/accesoryIcon.webp'
// import sparePartsIcon from '../../images/icons/sparePartsIcon.webp'
// import foldableIcon from '../../images/icons/foldableIcon.webp'
// import assemblyIcon from '../../images/icons/assemblyIcon.webp'

// import PopupEnvioCorreo from '../../components/popopEnvioCorreo/PopupEnvioCorreo';
// import SellerInformation from '../../components/sellerInformation/SellerInformation';
// import { useParams } from 'react-router-dom';
// import baseUrl from "../../utils/baseUrl.json";
// import axios from 'axios';


// const Detail = () => {

//     const [producto, setProducto] = useState({
//         nombre: "Bicicleta Gw Hyena 29 Shimano Revoshift Aluminio Susp 21vel",
//         precio: 600.0, descripción: "La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Únete a esta ola sustentable que avanza en todo el mundo!",
//         materialMarco: "aluminio", estado: "NUEVO", marca: "BMX", nombreEmpresa: "Roadmaster", imagenEmpresa: "https://http2.mlstatic.com/D_Q_NP_669693-MLA41330387579_042020-G.jpg", numeroEmpresa: "+54 261 3864564", provinciaEmpresa: "Mendoza", estadoEmpresa: "Luján de cuyo", direccionEmpresa: "calle 27c #34bb-81", correoEmpresa: "correoDeLaPutaQueLoPario@gmail.com", rodado: 29, cantidadDeVelocidades: 21, plegable: false, tamañoDeCuadro: "M", tipoDeFrenoDelantero: "Disco mecánico", tipoDeFrenoTrasero: "Disco mecánico", pieDeApoyo: false, canasto: true, cambiosDelanteros: "Microshift", cambiosTraseros: "Microshift", año: 2020, modelo: "Storm", peso: 10.5, pesoMaximoSoportado: 100, edadRecomendada: "ADULTOS",
//         listaDeImagenes: [{ url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { url: "https://pedalia.cc/wp-content/uploads/2019/08/C%C3%B3moArmarRuedaBici_3.jpg" }, { url: "https://images.pexels.com/photos/5882/vintage-brown-bike-bicycle-5882.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }]
//     })

//     const [product, setProduct] = useState({})
//     const { id, type } = useParams()
//     const [formIsOpen, setFormIsOpen] = useState(false);
//     const [mainImage, setMainImage] = useState("")
//     const [imageLoaded, setImageLoaded] = useState(false);
//     // const [productTypeLabel, setProductTypeLabel] = useState("");
//     const isMobile = window.innerWidth <= 767;


//     useEffect(() => {
//         getProduct();
//     }, []);
//     const getProductTypeLabel = (type) => {
//         switch (type) {
//             case "Bicicletas":
//                 return "bycicle";
//             case "Accesorios":
//                 return "accesory";
//             case "Indumentaria":
//                 return "clothing";
//             case "Repuestos":
//                 return "spareParts";
//             default:
//                 return "product";
//         }
//     }
    
//     const productTypeLabel = getProductTypeLabel(type);

//     const getProduct = async () => {
    
 

//         const url = `${baseUrl.url}/${productTypeLabel}/${id}`

//         try {
//             const token = JSON.parse(localStorage.getItem("token"));

//             const config = {
//                 headers: { Authorization: `Bearer ${token}` }
//             };

//             const response = await axios.get(url, config);

//             if (response.status == 200) {
//                 setProduct(response.data)
//                 setMainImage(response.data.imageList[0].url)
//             }

//         } catch (error) {
//             console.error('Error finding user information:', error);
//         }
//     };


//     return (
//         <Container className="detail" sx={{ marginTop: "200px", padding: { xs: "30px 30px", } }}>

//             <Grid container className="detail_seccionSuperior">

//                 <Grid xs={12} md={8} item>

//                     <Box className='detail_infoPrincipalProducto' sx={{ display: { xs: "block", md: "none" }, textAlign: "center" }}>
//                         <Typography variant='h5' component="h1" className='detail_infoPrincipalProductoTitulo'>{product.name}</Typography>
//                         <Typography component='h2' variant="h1" className='detail_infoPrincipalProductoPrecio'>$ {product.price} </Typography>
//                     </Box>
//                     <Box className='detail_images'>
//                         <article className='detail_images_vistaPrevia'>
//                             {product.imageList && product.imageList.map((image) =>
//                                 <>
//                                     <img
//                                         onLoad={() => setImageLoaded(true)}
//                                         onClick={() => { setMainImage(image.url) }}
//                                         src={image.url}
//                                         alt="Imagen del producto"
//                                         style={{ display: imageLoaded ? 'block' : 'none' }}
//                                     />

//                                     {!imageLoaded && <Skeleton sx={{ bgcolor: 'grey.400', marginTop: { xs: "30px", sm: "0px" }, marginBottom: { xs: "20px" }, width: { xs: "15vw", md: 80 }, height: { xs: "10vw", sm: "7vw", md: 50 } }} animation="wave" variant="rectangular" />}

//                                 </>
//                             )}
//                         </article>
//                         <div className='imageMagnifyer'>
//                             {imageLoaded ?
//                                 <ReactImageMagnify {...{
//                                     smallImage: {
//                                         alt: 'Wristwatch',
//                                         isFluidWidth: true,
//                                         src: mainImage,
//                                     },
//                                     largeImage: {
//                                         src: mainImage,
//                                         width: 1900,
//                                         height: 1100
//                                     },
//                                     enlargedImageContainerDimensions: { width: 490, height: 700, zIndex: '100 !important', position: "relative !important" },
//                                     enlargedImageContainerClassName: "imagenAgrandada",
//                                     isDisabled: false // Desactiva la magnificación en móviles
//                                 }} />
//                                 :
//                                 <Skeleton sx={{ bgcolor: 'grey.400', width: { xs: "100" }, height: { xs: "40vw", md: 400 } }} animation="wave" variant="rectangular" />
//                             }
//                         </div>
//                     </Box>

//                     <Box className='detail_caracteristicas'>
//                         <Typography sx={{ m: "10px 0px" }} variant='h4'>
//                             Características generales
//                         </Typography>
//                         <Grid className='detail_caracteristicasGrid' container spacing={1}>



//                             <Grid item xs={12} sm={6} >
//                                 <Button
//                                     variant="disabled"
//                                     startIcon={<Avatar src={box} alt="" />}
//                                 >
//                                     Estado: <strong> {product.state}</strong>
//                                 </Button>
//                             </Grid>
//                             {product.type &&
//                                 <Grid item xs={12} sm={6} >
//                                     <Button
//                                         variant="disabled"
//                                         startIcon={<Avatar src={productTypeLabel === "bycicle" ? bicycleIcon : productTypeLabel === "clothing" ? clothingIcon : productTypeLabel === "spareParts" ? sparePartsIcon : productTypeLabel === "accesory" ? accesoryIcon : ""} alt="" />}
//                                     >
//                                         Tipo de {productTypeLabel}: <strong> {product.type.replace(/_/g, ' ')}</strong>
//                                     </Button>
//                                 </Grid>
//                             }
//                             <Grid item xs={12} sm={6} >
//                                 <Button
//                                     variant="disabled"
//                                     startIcon={<Avatar src={colorIcon} alt="" />}
//                                 >
//                                     Color: <strong> {product.color}</strong>
//                                 </Button>
//                             </Grid>

//                             <Grid item xs={12} sm={6} >
//                                 <Button
//                                     variant="disabled"
//                                     startIcon={<Avatar src={billIcon} alt="" />}
//                                 >
//                                     ¿Trae factura?: <strong> {product.hasInvoice ? "SI" : "NO"}</strong>
//                                 </Button>
//                             </Grid>



//                             {product.year &&

//                                 <Grid item xs={12} sm={6} >
//                                     <Button
//                                         variant="disabled"
//                                         startIcon={<Avatar src={calendarIcon} alt="" />}

//                                     >
//                                         Año: <strong> {product.year}</strong>
//                                     </Button>
//                                 </Grid>
//                             }

//                             {product.brandDto &&

//                                 <Grid item xs={12} sm={6} >
//                                     <Button
//                                         variant="disabled"
//                                         startIcon={<Avatar src={brandIcon} alt="" />}
//                                     >
//                                         Marca: <strong>{product.brandDto.brandName}</strong>
//                                     </Button>
//                                 </Grid>
//                             }
//                             {product.weight &&
//                                 <Grid item xs={12} sm={6} >
//                                     <Button
//                                         variant="disabled"
//                                         startIcon={<Avatar src={weightIcon} alt="" />}

//                                     >
//                                         Peso: <strong> {product.weight} Kilos</strong>
//                                     </Button>
//                                 </Grid>
//                             }

//                             {product.foldable != null &&

//                                 <Grid item xs={12} sm={6} >
//                                     <Button
//                                         variant="disabled"
//                                         startIcon={<Avatar src={foldableIcon} alt="" />}
//                                     >
//                                         ¿Es plegable?<strong style={{ marginLeft: "9px" }}>{product.foldable ? "si" : "no"}</strong>
//                                     </Button>
//                                 </Grid>
//                             }
//                             {product.requiresAssembly != null &&

//                                 <Grid item xs={12} sm={6} >
//                                     <Button
//                                         variant="disabled"
//                                         startIcon={<Avatar src={assemblyIcon} alt="" />}
//                                     >
//                                         ¿Requiere ensamblado?<strong style={{ marginLeft: "9px" }}>{product.requiresAssembly ? "si" : "no"}</strong>
//                                     </Button>
//                                 </Grid>
//                             }

//                         </Grid>

//                     </Box>

//                 </Grid>

//                 <Grid sx={{ display: { xs: "none", md: "block" } }} item container xs={4} className='detail_infoPrincipalProducto'>
//                     <Typography variant='h5' component="h1" className='detail_infoPrincipalProductoTitulo'>{product.name}</Typography>
//                     <Typography component='h2' variant="h1" className='detail_infoPrincipalProductoPrecio'>$ {product.price} </Typography>

//                     <SellerInformation setFormIsOpen={setFormIsOpen} product={product} producto={producto} />
//                 </Grid>


//                 <Grid item xs={5} className='detail_infoPrincipalProducto thigsHidden'>
//                     <Typography variant='h6' component="h1" sx={{ color: "black", padding: "0 5px" }} className='detail_infoPrincipalProductoTitulo'>{product.name}</Typography>
//                     <Typography variant="h3" component='h2' className='detail_infoPrincipalProductoPrecio'> $ {product.price}</Typography>
//                 </Grid>

//                 <Grid item xs={12} sx={{ justifyContent: { lg: "left", xs: "center" } }} className='detail_caracteristicasExtra' container spacing={4}>
//                     {(product.wheelSize || product.speedCount || product.suspensionType || product.engineType || product.kilometres)
//                         &&
//                         <Grid item xs={12} md={6}>
//                             <Box>
//                                 <Typography variant="h5">Caracteristicas principales</Typography>
//                                 <List>
//                                     {product.wheelSize &&
//                                         <ListItem >
//                                             <ListItemText sx={{ color: "red" }}>Rodado</ListItemText>
//                                             <ListItemText>{product.wheelSize}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.speedCount &&
//                                         <ListItem sx={{}}>
//                                             <ListItemText>Cantidad de velocidades</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.speedCount}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.suspensionType &&
//                                         <ListItem >
//                                             <ListItemText>Tipo de suspensión</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.suspensionType}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.engineType &&

//                                         <ListItem sx={{}}>
//                                             <ListItemText>Motor</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.engineType.replace(/_/g, ' ')}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.kilometres &&

//                                         <ListItem >
//                                             <ListItemText>Kilometraje</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.kilometres}</ListItemText>
//                                         </ListItem>
//                                     }
//                                 </List>
//                             </Box>
//                         </Grid>
//                     }


//                     {(product.rearBrakeType || product.frontBrakeType) &&
//                         <Grid item xs={12} md={6}>
//                             <Box>
//                                 <Typography variant="h5">Frenos</Typography>
//                                 <List>
//                                     {product.frontBrakeType &&
//                                         <ListItem >
//                                             <ListItemText>Tipo de freno delantero</ListItemText>
//                                             <ListItemText>{product.frontBrakeType}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.rearBrakeType &&
//                                         <ListItem sx={{}}>
//                                             <ListItemText>Tipo de freno trasero</ListItemText>
//                                             <ListItemText>{product.rearBrakeType}</ListItemText>
//                                         </ListItem>
//                                     }
//                                 </List>
//                             </Box>
//                         </Grid>
//                     }
//                     {(product.rearGears || product.frontGears) &&

//                         <Grid item xs={12} md={6}>
//                             <Box>
//                                 <Typography variant="h5">Cambios</Typography>
//                                 <List>
//                                     {product.frontGears &&
//                                         <ListItem >
//                                             <ListItemText>Cambios delanteros</ListItemText>
//                                             <ListItemText>{producto.cambiosDelanteros}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.rearGears &&
//                                         <ListItem >
//                                             <ListItemText>Cambios traseros</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{producto.cambiosTraseros}</ListItemText>
//                                         </ListItem>
//                                     }
//                                 </List>
//                             </Box>
//                         </Grid>
//                     }
//                     {((product.gender && product.gender != "No_aplica") || product.recommendedAge) &&

//                         <Grid item xs={12} md={6}>
//                             <Box>
//                                 <Typography variant="h5">Recomendaciones</Typography>
//                                 <List>
//                                     {product.recommendedAge &&
//                                         <ListItem >
//                                             <ListItemText>Edad recomendada</ListItemText>
//                                             <ListItemText>{product.recommendedAge}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {(product.gender && product.gender != "No_aplica") &&
//                                         <ListItem >
//                                             <ListItemText>Género</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.gender}</ListItemText>
//                                         </ListItem>
//                                     }
//                                 </List>
//                             </Box>
//                         </Grid>
//                     }

//                     {(product.frameSize || product.material || product.size || product.amountPieces) &&

//                         <Grid item xs={12} md={6}>
//                             <Box>
//                                 <Typography variant="h5">
//                                     {type == "bycicle" ? "Características del cuadro" :
//                                         type == "clothing" ? "Características de la indumentaria" :
//                                             "Características del repuesto"}
//                                 </Typography>
//                                 <List>
//                                     {product.frameSize &&
//                                         <ListItem >
//                                             <ListItemText>Tamaño del cuadro</ListItemText>
//                                             <ListItemText>{product.frameSize}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.material &&
//                                         <ListItem >
//                                             <ListItemText>{type == "bycicle" ? "Material del cuadro" : "Material"}</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.material}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.amountPieces &&
//                                         <ListItem >
//                                             <ListItemText>Cantidad de piezas</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.amountPieces}</ListItemText>
//                                         </ListItem>
//                                     }
//                                     {product.size &&
//                                         <ListItem >
//                                             <ListItemText>Talla</ListItemText>
//                                             <ListItemText sx={{ width: "30%" }}>{product.size}</ListItemText>
//                                         </ListItem>
//                                     }
//                                 </List>
//                             </Box>
//                         </Grid>
//                     }
//                     {product.basket || product.kickstand || product.trainingWheels &&
//                         <Grid item xs={12} md={6}>
//                             <Box>
//                                 <Typography variant="h5">Accesorios</Typography>
//                                 <List>
//                                     <ListItem sx={{ backgroundColor: "#ebebeb", width: "18vw" }}>
//                                         <ListItemText>Con canasto</ListItemText>
//                                         <ListItemText>{product.basket ? "SI" : "NO"}</ListItemText>
//                                     </ListItem>
//                                     <ListItem sx={{ borderRight: "solid", borderLeft: "solid", borderWidth: "0.1px", borderColor: "#ebebeb" }}>
//                                         <ListItemText>Con pie de apoyo</ListItemText>
//                                         <ListItemText sx={{ width: "30%" }}>{product.kickstand ? "SI" : "NO"}</ListItemText>
//                                     </ListItem>
//                                     <ListItem sx={{ borderRight: "solid", borderLeft: "solid", borderWidth: "0.1px", borderColor: "#ebebeb" }}>
//                                         <ListItemText>Con ruedas de entrenamiento</ListItemText>
//                                         <ListItemText sx={{ width: "30%" }}>{product.trainingWheels ? "SI" : "NO"}</ListItemText>
//                                     </ListItem>
//                                 </List>
//                             </Box>
//                         </Grid>
//                     }

//                 </Grid>

//                 {product.description &&
//                     <Grid xs={8} className='detail_descripcion'>
//                         <Typography sx={{ m: "10px 0px", textAlign: "start" }} variant='h4' >
//                             Descripción
//                         </Typography>

//                         <Typography sx={{ m: "10px 0px", textAlign: "start", fontWeight: "500", fontSize: "18px" }} variant='p' component="p">
//                             {product.description}
//                         </Typography>

//                     </Grid>
//                 }
//                 <Grid item xs={12} sm={8} sx={{ display: { xs: "block", md: "none" }, position: "relative", left: "50%", transform: "translate(-50%)" }}>
//                     <SellerInformation setFormIsOpen={setFormIsOpen} product={product} producto={producto} />
//                 </Grid>
//             </Grid>

//             <PopupEnvioCorreo product={product} open={formIsOpen} setOpen={setFormIsOpen} />



//         </Container>
//     )
// }

// export default Detail
