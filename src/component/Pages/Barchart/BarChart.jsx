import Stack from "@mui/material/Stack";
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import Box from "@mui/material/Box";
import Bar from "./Bar";


  

export default function BarChart() {
    
    
  return (
    <Stack
    direction="column"
        gap="10px"
    
    >
        <HeadTitle title={'Bar Chart'} subTitle={'The minimum wage in Germany, France and Spain (EUR/month)'}/>
      
    <Box sx={{height:"500px"}}>
      <Bar/>
     
    </Box>
        
        </Stack>
  )
}
