import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Box, Paper, Stack } from '@mui/material'
import Typography from "@mui/material/Typography"
import interactionPlugin from "@fullcalendar/interaction" 
import { useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import "./Calendar.css"



export default function Calendar() {
  const [allEvent,setEvents]=useState([])

  const handleDateClick = (arg) => {
    
     const isEvent = allEvent.find((event) => event.date=== arg.dateStr)
      
    if(isEvent) {
        const confirmDelete = confirm("Are you sure to delete this event")
        if(confirmDelete) {
          const updateEvent=allEvent.filter((event) => event.date!== arg.dateStr  )
        setEvents(updateEvent)
        }
        
      
    } else {
      const myEvent =prompt(arg.dateStr)
      if(myEvent!=="" && myEvent!==null){
        setEvents([...allEvent,{title:myEvent,date:arg.dateStr}])
    
      }

    }
 
  }

  return (

    

    <Stack
    direction={'row'}
    gap={2}
    sx={{minHeight:"100vh"}}
    >
      <Paper sx={{flexBasis:"310px",p:2}}>
        <Typography
        variant='h5'
        sx={{textAlign:"center",fontWeight:"bold"}}
        >
          All Events ({allEvent.length})
        </Typography>
        <Box>
          {
            allEvent.map((event) => {
              return(
                <Box key={event.date} sx={{display:"flex",alignItems:"center",gap:"5px"}}>
                  <CircleIcon sx={{fontSize:"12px"}}/>
                  <Stack
                  direction={'row'}
                  alignItems={'center'}
                  >
                    <Typography variant='h6' sx={{fontWeight:"bold"}}>{event.date} :</Typography>
                    <Typography sx={{marginLeft:"5px",fontStyle:"italic"}} variant='subtitle1'> {event.title}</Typography>

                 
                  </Stack>
                  


                </Box>
              )
             })
          }
        </Box>
      </Paper>
      <Box sx={{flexGrow:1}}>
      <FullCalendar
         
         plugins={[ dayGridPlugin, interactionPlugin ]}
         dateClick={handleDateClick}
         initialView="dayGridMonth"
         events={allEvent}
       />

      </Box>
    

    </Stack>
   )
}


