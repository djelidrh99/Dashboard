import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import {  useTheme } from "@mui/material";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import EmailIcon from '@mui/icons-material/Email';
import { purple } from "@mui/material/colors";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BoxData from "./BoxData";
import TrafficIcon from '@mui/icons-material/Traffic';

// Enregistrement des éléments nécessaires
Chart.register(ArcElement, Tooltip, Legend);

const dataOne = {
   
    datasets: [{
      labels: ['My First Dataset','label2'],
      data: [60, 40],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        
      ],
      hoverOffset: 8,
      borderWidth:0,
      borderRadius:10,
     
    }]
  };

  const dataTwo = {
   
    datasets: [{
      labels: ['My First Dataset','label2'],
      data: [80, 20],
      backgroundColor: [
        'rgb(97, 40, 52)',
        'rgb(169, 54, 235)',
        
      ],
      hoverOffset: 8,
      borderWidth:0,
      borderRadius:10,
     
    }]
  };

  const dataThree = {


    datasets: [{
      labels: ['My First Dataset','label2'],
      data: [68, 32],
      backgroundColor: [
        'rgb(155, 204, 75)',
        'rgb(195, 243, 21)',
        
      ],
      hoverOffset: 8,
      borderWidth:0,
      borderRadius:10,
     
    }]
  };

//   const options = {
//     maintainAspectRatio: false,
//     cutout: "70%",
//     plugins: {
//       datalabels: {
//         color: "#fff",
//         font: {
//           size: 14,
//           weight: "bold",
//         },
//         formatter: (value, context) => {
//           const label = context.chart.data.labels[context.dataIndex];
//           return `${label}: ${value}%`; 
//         },
//       },
//     },
//     legend: {
//         display: true,
//         position: "bottom",
//       },
//       tooltip: {
//         enabled: true, // Affiche les tooltips au survol
//       },
//     },

const dataFour = {


  datasets: [{
    labels: ['My First Dataset','label2'],
    data: [58, 42],
    backgroundColor: [
      'rgb(190, 142, 86)',
      'rgb(137, 19, 153)',
      
    ],
    hoverOffset: 8,
    borderWidth:0,
    borderRadius:10,
   
  }]
};

  const allData= [
    {
      icon:<EmailIcon sx={{color:purple[500]}} />,
      stats:'12,545',
      title:'Email Sent',
      DoughnutData:dataOne,
      percentage:"+21%"
    },
    {
      icon:<PointOfSaleIcon sx={{color:purple[500]}} />,
      stats:'452,545',
      title:'Sales Obtained',
      DoughnutData:dataTwo,
      percentage:"+33%"
    },
    {
      icon:<PersonAddIcon sx={{color:purple[500]}} />,
      stats:'32,545',
      title:'New Clients',
      DoughnutData:dataOne,
      percentage:"+25%"
    }
  ]

  const doughnutTwo= {
    icon:<TrafficIcon sx={{color:purple[500]}} />,
      stats:'1,112,545',
      title:'Traffic Received',
      DoughnutData:dataFour,
      percentage:"+15%"

  }
    
 


export default function Dashboard() {
    const theme = useTheme()
  return (
    <Stack
    direction="column"
        gap="10px"
    
    >
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
            <Box>
                <Typography fontWeight="bold" color={theme.palette.text.
// @ts-ignore
                fixColor} variant="h4">Dashboard</Typography>
                <Typography variant="h6">Welcome to your dashboard</Typography>
            </Box>
            <Button sx={{fontWeight:"bold"}} variant="contained">
                <DownloadOutlinedIcon sx={{marginRight:"10px"}}/>
                Download Reports
            </Button>
            
        </Stack>

        <Stack
        direction="row"
        alignItems="center"
        gap="10px"
        >
          {allData.map((data,index) => {
            return(
              <BoxData key={data.title} data={data}  />
            )
           })}
            

           
        </Stack>
        <BoxData data={doughnutTwo}/>
        
    </Stack>
    
  )
}
