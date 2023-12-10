import { TextField, Grid, Typography, Button } from '@mui/material';
import './Form.css'
import { useFormik } from 'formik';
import * as Yup from "yup"

const Form = () => {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            teléfono: "",
            mensaje: ""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar un nombre"),
            email: Yup.string().email("Formato del email inválido").required('Campo obligatorio'),
            teléfono: Yup.string().required("Debes ingresar una teléfono").min(8, "El teléfono debe tener al menos 8 caracteres"),
            mensaje: Yup.string().required("No se ha escrito Mensaje").oneOf([Yup.ref('mensaje'), null], "Los mensaje deben coincidir"),

        }),
        onSubmit: (data) => {
            alert("Datos enviados correctamente")
            console.log(data)
        },
    });

    return (
        <div className='form'>

            <form className='form-container' onSubmit={handleSubmit}>
                <Typography id="h2" component="h2" variant='h4' align='center' height={"20%"}>Formulario de Contacto</Typography>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-evenly"
                    spacing={2}
                    sx={{ width: "100%" }}
                >

                    <Grid item xs={12} md={8} className='input' >
                        <TextField type='text'
                            label="Ingrese su nombre"
                            variant="outlined"
                            fullWidth
                            error={touched.nombre && errors.nombre}
                            helperText={touched.nombre && errors.nombre}
                            name='nombre'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nombre}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} >
                        <TextField type='email'
                            label="Ingrese su email"
                            variant="outlined"
                            fullWidth
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                        />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <TextField type='number'
                            label="Ingrese su teléfono"
                            variant="outlined"
                            fullWidth
                            name='teléfono'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.teléfono}
                            error={touched.teléfono && errors.teléfono}
                            helperText={touched.teléfono && errors.teléfono} />

                    </Grid>

                    <Grid item xs={12} md={8} >
                        <TextField type='text'
                            label="Enviar Mensaje"
                            variant="outlined"
                            fullWidth
                            name='mensaje'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mensaje}
                            error={touched.mensaje && errors.mensaje}
                            helperText={touched.mensaje && errors.mensaje} />
                    </Grid>

                </Grid>

                <Button type='submit' variant='contained' style={{ backgroundColor: "orange" }}>Enviar</Button>

            </form>
        </div>
    )
}

export default Form