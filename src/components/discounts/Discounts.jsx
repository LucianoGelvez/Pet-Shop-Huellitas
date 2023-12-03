import { Box } from '@mui/material'
import descount from '../../images/discount.webp'
import Timer from './Timer'

const Discounts = () => {
    return (
        <Box sx={{backgroundColor: "#ff6b35", margin: "80px",display: "flex", flexDirection: {xs: "column",md: "column", lg: "row"},justifyContent: "center", alignItems: "center", padding: "5%", width: "80%", borderRadius: "120px 0px 120px 0px"}}>
            <Box width={"50%"} sx={{display: "flex", justifyContent: "center"}}>
                <img src={descount} alt='descount' width={400} />
            </Box>
            <Box width={"50%"}>
                <Timer/>
            </Box>
        </Box>
    )
}

export default Discounts