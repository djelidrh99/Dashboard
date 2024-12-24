import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function HeadTitle({title,subTitle}) {
        const theme = useTheme()
    
  return (
    <Box>
    <Typography fontWeight="bold" color={theme.palette.text.
// @ts-ignore
    fixColor} variant="h4">{title}</Typography>
    <Typography variant="h6">{subTitle}</Typography>
</Box>  )
}
