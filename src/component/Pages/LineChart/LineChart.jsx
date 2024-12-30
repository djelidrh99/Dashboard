import Stack from "@mui/material/Stack";
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import Box from "@mui/material/Box";
import Line from "./Line";

export default function LineChart() {
  return (
    <Stack
    direction="column"
        gap="10px"
    
    >
        <HeadTitle title={'Line Chart'} subTitle={'Simple Line Chart'}/>
      
    <Box sx={{height:"500px"}}>
      <Line/>
     
    </Box>
        
        </Stack>
  )
}
