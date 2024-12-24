import Stack from "@mui/material/Stack";
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import DataTable from "./Table";


export default function Team() {
  return (
    <Stack
    direction="column"
        gap="10px"
    
    >
        <HeadTitle title={"Team"} subTitle={"Managing the Team Members"}/>
        <DataTable/>
        
    </Stack>
  )
}
