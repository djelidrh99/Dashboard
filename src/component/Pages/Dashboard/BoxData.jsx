import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Doughnut } from 'react-chartjs-2';

const options = {
    maintainAspectRatio: false,
    cutout: "70%",
   
  };

export default function BoxData({data}) {
  return (
    <Paper
            sx={{flexGrow:1,p:2}}
            >
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            >
                <Box>
                    {data.icon}
                    <Typography variant="caption"  gutterBottom sx={{fontWeight:"bold",display:"block"}}>{data.stats}</Typography>
                    <Typography variant="caption" gutterBottom sx={{fontWeight:"bold",display:"block"}}> {data.title}                   </Typography>

                </Box>
                <Box sx={{width:"120px",height:"100px",p:2,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <Doughnut data={data.DoughnutData} options={options} />
                    <Typography variant="caption"   sx={{fontWeight:"bold",display:"block",marginTop:"10px"}}>{data.percentage}</Typography>


                </Box>
            </Stack>

            </Paper>
  )
}
