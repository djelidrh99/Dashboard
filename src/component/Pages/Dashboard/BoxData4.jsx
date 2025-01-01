import { Paper } from '@mui/material'
import Geography from '../Geography/Geography'


export default function BoxData4() {
  return (
    <Paper
    sx={{flexGrow:1,p:1,height:"400px"}}
    
    >
    <Geography isDashboard={true} scale={80}/>
    </Paper>
  )
}
