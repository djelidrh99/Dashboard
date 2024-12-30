import { Box, Icon, IconButton, Paper, Stack, Typography } from '@mui/material'
import { orange, purple } from '@mui/material/colors'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Line from '../LineChart/Line';

const transactionsData=[
    {titile:"01e4dsaewf johndoe",
        date:"12/12/2021",
        amount:"$2000"
    },
    {titile:"01e4dsaewf johndoe",
        date:"2022-04-01",
        amount:"$100"
    },
    {titile:"01e4dsaewf johndoe",
        date:"08/12/2021",
        amount:"$70"
    },
    {titile:"01e4dsaewf johndoe",
        date:"12/11/2021",
        amount:"$77"
    },
    {titile:"01e4dsaewf johndoe",
        date:"23/08/2021",
        amount:"$22"
    },
    {titile:"01e4dsaewf johndoe",
        date:"12/12/2022",
        amount:"$221"
    },
]

export default function BoxData2() {
  return (
    <Stack
    direction="row"
    gap={'10px'}
    >
        <Paper
        sx={{flexGrow:1,p:1,height:"400px"}}
        >
            <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{px:4,py:1}}
            >
                <Box>
                    <Typography gutterBottom sx={{color:purple[500],fontWeight:"bold"}} variant='h6'>Revenue Generated</Typography>
                    <Typography sx={{fontWeight:"bold"}} variant='caption'>$59,342.32</Typography>

                </Box>
                <IconButton>
                <DownloadOutlinedIcon/>
                </IconButton>
            </Stack>
            <Box sx={{height:"300px",width:"100%"}}>
                <Line isDashboard={true}/>
            </Box>
        </Paper>
        <Stack
        direction="column"
        gap={'5px'}
        sx={{flexBasis:"25%",height:"400px",overflowY:"auto"}}
        
        >

            <Paper
            sx={{flexGrow:1,p:1}}
            >
                <Typography sx={{color:purple[500],fontWeight:"bold"}} variant='h6'>Recent Transactions</Typography>
            
            </Paper>
            {transactionsData.map((data,index)=>{
                return(
                    <Stack
                    direction={"column"}
                    
                    key={index}
                    >
                    <Paper  sx={{p:1}} >
                    <Stack
                    direction={"row"}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                   
                    >
                       
                            <Typography sx={{maxWidth:"90px"}}>{data.titile}</Typography>
                            <Typography>{data.date}</Typography>
                            <Box sx={{p:1,textAlign:"center",backgroundColor:orange[800],borderRadius:"4px",minWidth:"62px"}}>{data.amount}</Box>


                            </Stack>   
                    </Paper>
                    </Stack>
                )
            })}
            
        </Stack>

    </Stack>
  )
}
