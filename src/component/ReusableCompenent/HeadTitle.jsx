import Box from "@mui/material/Box"
import { purple } from "@mui/material/colors"
import Typography from "@mui/material/Typography"
import { motion } from "framer-motion";

export default function HeadTitle({title,subTitle}) {
       
    
  return (
    <Box
    component={motion.div}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    transition={{duration:1.6, type: "spring" ,stiffness:50}}
    >
    <Typography fontWeight="bold" sx={{color:purple[500]}} variant="h4">{title}</Typography>
    <Typography variant="h6">{subTitle}</Typography>
</Box>  )
}
