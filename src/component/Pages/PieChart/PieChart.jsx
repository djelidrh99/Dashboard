import Stack from "@mui/material/Stack";
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import Box from "@mui/material/Box";
import Pie from "./Pie";

const data = [
    {
      "id": "html",
      "label": "html",
      "value": 80,
      "color": "hsl(0, 0.00%, 0.00%)"
    },
    {
      "id": "C++",
      "label": "C++",
      "value": 30,
      "color": "hsl(336, 70%, 50%)"
    },
    {
      "id": "Javascript",
      "label": "Javascript",
      "value": 70,
      "color": "hsl(63, 70%, 50%)"
    },
    {
      "id": "Css",
      "label": "Css",
      "value": 70,
      "color": "hsl(141, 70%, 50%)"
    },
    {
      "id": "React",
      "label": "React",
      "value": 70,
      "color": "hsl(146, 70%, 50%)"
    }
  ]

export default function PieChart() {
  return (
    <Stack
    direction="column"
        gap="10px"
    
    >
        <HeadTitle title={'Pie Chart'} subTitle={'Simple Pie Chart'}/>
      
    <Box sx={{height:"500px"}}>
      <Pie data={data} scheme={{ scheme: 'paired'}}/>
     
    </Box>
        
        </Stack>
  )
}
