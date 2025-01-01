import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import {  useTheme } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { purple } from "@mui/material/colors";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BoxData from "./BoxData";
import TrafficIcon from '@mui/icons-material/Traffic';
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import BoxData2 from "./BoxData2";
import BoxData3 from "./BoxData3";
import BoxData4 from "./BoxData4";
import { motion } from "framer-motion";

 


  const allData= [
    {
      icon:<EmailIcon sx={{color:purple[500]}} />,
      stats:'12,545',
      title:'Email Sent',
      scheme: { scheme: 'nivo'},
      percentage:"+21%",
      data: [{
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
      }]
    },
    {
      icon:<PointOfSaleIcon sx={{color:purple[500]}} />,
      stats:'452,545',
      title:'Sales Obtained',
      scheme: { scheme: 'dark2'},
      data:[  {
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
      }],
      percentage:"+33%"
    },
    {
      icon:<PersonAddIcon sx={{color:purple[500]}} />,
      stats:'32,545',
      title:'New Clients',
      scheme: { scheme: 'paired'},
      data:[{
        "id": "React",
        "label": "React",
        "value": 70,
        "color": "hsl(146, 70%, 50%)"
      },{
        "id": "Typescript",
        "label": "Typescript",
        "value": 40,
        "color": "hsl(146, 70%, 50%)"

      }],
      percentage:"+25%"
    }
  ]

  const doughnutTwo= {
    icon:<TrafficIcon sx={{color:purple[500]}} />,
      stats:'1,112,545',
      title:'Traffic Received',
      scheme: { scheme: 'set1'},
      data:[{
        "id": "React",
        "label": "React",
        "value": 70,
        "color": "hsl(146, 70%, 50%)"
      },{
        "id": "Typescript",
        "label": "Typescript",
        "value": 40,
        "color": "hsl(146, 70%, 50%)"

      }],
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
          <HeadTitle title={"Dashboard"} subTitle={"Welcome to your dashboard"}/>
            
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
        <BoxData2/>
        <BoxData3/>
        <BoxData4/>
        
    </Stack>
    
  )
}
