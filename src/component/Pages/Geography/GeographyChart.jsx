import Stack from "@mui/material/Stack";
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import Box from "@mui/material/Box";
import Geography from "./Geography";
import { useTheme } from "@mui/material";

export default function GeographyChart() {
    const theme =useTheme()
  
  return (
    <Stack
    direction="column"
        gap="10px"
    
    >
        <HeadTitle title={'Line Chart'} subTitle={'Simple Line Chart'}/>
      
    <Box sx={{height:"500px",border:`1px solid ${theme.palette.text.primary}`,borderRadius:"5px"}}>
      <Geography scale={200}/>
     
    </Box>
        
        </Stack>
  )
}
