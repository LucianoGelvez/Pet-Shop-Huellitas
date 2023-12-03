import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react'

const Timer = () => {
    const tiempoInicial = 3 * 60 * 60; // 3 horas en segundos
    const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);

    const reiniciarContadorDiario = () => {
        const ahora = new Date().getTime() / 1000; // Obtener la hora actual en segundos
        const horaInicial = localStorage.getItem('horaInicial'); // Obtener la hora inicial del contador (guardada en localStorage)

        if (!horaInicial || (ahora - horaInicial) > 24 * 60 * 60) { // Si no hay hora inicial o han pasado más de 24 horas
            localStorage.setItem('horaInicial', ahora); // Establecer la nueva hora inicial
            setTiempoRestante(tiempoInicial); // Reiniciar el tiempo restante
        }
    }

    const convertirASegundos = tiempo => {
        const horas = Math.floor(tiempo / 3600);
        const minutos = Math.floor((tiempo % 3600) / 60);
        const segundos = tiempo % 60;
        return { horas, minutos, segundos };
    }

    useEffect(() => {
        reiniciarContadorDiario();

        const intervalo = setInterval(() => {
            setTiempoRestante(prevTiempo => {
                if (prevTiempo > 0) {
                    return prevTiempo - 1; // Restar un segundo al tiempo restante
                } else {
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const tiempo = convertirASegundos(tiempoRestante);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", textAlign: "center"}}>
            <Typography variant='h3' fontWeight={800} color="white" p={3}>Hot Deal Offer</Typography>
            <Typography variant='h6' fontWeight={500} color="white">Buy today, this discount is waiting for you</Typography>
            <Typography m={3}>Tiempo restante:</Typography>
            <Typography> <span style={{backgroundColor: "orange", height: "50px", fontSize: "40px", width:"90px", borderRadius: "0 0 30px 0", padding: "10px", margin:"10px"}}>{tiempo.horas}</span>:<span style={{backgroundColor: "orange", height: "50px", fontSize: "40px", width:"90px", borderRadius: "0 0 30px 0", padding: "10px", margin:"10px"}}>{tiempo.minutos}</span>:<span style={{backgroundColor: "orange", height: "50px", fontSize: "40px", width:"90px", borderRadius: "0 0 30px 0" , padding: "10px", margin:"10px"}}>{tiempo.segundos}</span></Typography>
            <Typography variant='h4' fontWeight={800} color="white" p={2}>Animale</Typography>
            <Typography variant='h5' fontWeight={400} p={3}>$200</Typography>
            <Button>Add to cart</Button>
        </Box>
    )
}

export default Timer