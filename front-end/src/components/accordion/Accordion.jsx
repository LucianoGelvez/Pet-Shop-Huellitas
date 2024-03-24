import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', backgroundColor: "#ffc312" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{width: {sx: "90vw", md:"60vw"}, marginTop: "40px"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Vacunaciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mantenemos a tus mascotas protegidas mediante la administración de vacunas importantes. Informaremos y programaremos un plan de vacunación personalizado según las necesidades individuales de tu mascota.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Cuidado Preventivo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          El cuidado preventivo es esencial para la salud a largo plazo de tus animales. Ofrecemos servicios como desparasitación y control de pulgas para prevenir problemas antes de que ocurran.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Exámenes de Salud</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Realizamos exámenes exhaustivos para evaluar la salud general de tu mascota. Esto incluye exámenes físicos, análisis de sangre y pruebas específicas según las necesidades.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Hospitalización</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          En casos que requieran atención intensiva, ofrecemos servicios de hospitalización con instalaciones modernas y personal dedicado para el cuidado continuo de tu mascota. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Servicios de Emergencia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Entendemos que las emergencias pueden ocurrir en cualquier momento. Estamos disponibles para brindar atención de emergencia y cuidado las 24 horas del día, los 7 días de la semana. </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
