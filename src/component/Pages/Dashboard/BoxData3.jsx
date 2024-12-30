import { Box, Paper, Stack, Typography } from "@mui/material";
import Bar from "../Barchart/Bar";
import { purple } from "@mui/material/colors";
import Pie from "../PieChart/Pie";

const data = [{
    "id": "Next",
    "label": "Next",
    "value": 70,
    "color": "hsl(146, 70%, 50%)"
  },{
    "id": "Python",
    "label": "Python",
    "value": 40,
    "color": "hsl(146, 70%, 50%)"

  }]

  const scheme = {scheme: 'pastel2'}



export default function BoxData3() {
  return (
    <Stack
    direction="row"
    gap={'10px'}
    >
        <Paper
        sx={{flexBasis:"50%",p:1}}
        >
            <Box sx={{px:4,py:1}}>
            <Typography gutterBottom sx={{color:purple[500],fontWeight:"bold"}} variant='h6'>Campaign</Typography>
            </Box>
            <Box sx={{height:"200px"}}>
                <Pie data={data} isDashboard={true} scheme={scheme}/>
            </Box>
            <Box sx={{mt:2,textAlign:"center"}}>
                <Typography variant="subtitle1"  gutterBottom sx={{fontWeight:'bold'}}>$48,352 revenue generated</Typography>
                <Typography variant="subtitle2" sx={{fontWeight:"bold"}}>Includes extra misc expenditures and costs</Typography>
                </Box>
        </Paper>
        <Paper
        sx={{flexGrow:1,p:1}}
        >
            <Box sx={{px:4,py:1}}>
            <Typography gutterBottom sx={{color:purple[500],fontWeight:"bold"}} variant='h6'>Sales Quantity</Typography>
            </Box>
            <Box sx={{height:"300px"}}>
                <Bar isDashboard={true}/>
            </Box>
        </Paper>

    </Stack>
  )
}
