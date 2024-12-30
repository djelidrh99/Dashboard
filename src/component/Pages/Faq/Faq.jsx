import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography, useTheme } from "@mui/material";
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FaqDiscreption= [
    {
        question:'General setting',
        reponse:'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        question:'Users',
        reponse:'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
]


export default function Faq() {
    const theme=useTheme()
  return (
    <Stack
     direction="column"
        gap="10px"
    >
        <HeadTitle title={'Faq'} subTitle={'Frequently Asked Questions Page'}/>
        <Stack
        direction="column"
        gap="20px"
        sx={{marginTop:"20px"}}
        
        >
            {FaqDiscreption.map((item,index)=>{
              return(
                    <Accordion key={index}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography sx={{fontWeight:'bold'}} component="span">{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                            sx={{color:theme.palette.text.secondary}}
                            >
                            {item.reponse}
                            </AccordionDetails>
                        </Accordion>
              )  
            })}

        </Stack>
    </Stack>
  )
}
