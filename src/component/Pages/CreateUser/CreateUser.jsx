import Stack from "@mui/material/Stack";

import HeadTitle from "../../ReusableCompenent/HeadTitle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export default function CreateUser() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };


return (
    <Stack sx={{pb:"10px"}} direction="column" gap="10px">
        <HeadTitle title={"Team"} subTitle={"Managing the Team Members"} />
        <Stack sx={{mt:"20px"}} component={'form'} direction="column" gap="40px" >
            <Stack direction="row" gap="10px">
            <TextField sx={{flexGrow:1}} id="filled-basic" label="Filled" variant="filled" />
            <TextField sx={{flexGrow:1}} id="filled-basic" label="Filled" variant="filled" />
            </Stack>
            <TextField sx={{flexGrow:1}} id="filled-basic" label="Filled" variant="filled" />
            <TextField sx={{flexGrow:1}} id="filled-basic" label="Filled" variant="filled" />
        </Stack>

        <Stack sx={{mt:"40px"}} component={'form'} direction="column" gap="20px" >
            <TextField sx={{flexGrow:1}} id="filled-basic" label="Filled" variant="filled" />
            <TextField sx={{flexGrow:1}} id="filled-basic" label="Filled" variant="filled" />
            <FormControl variant="filled" sx={{ flexGrow:1 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Stack>

        <Box sx={{flexGrow:1,display:"flex",justifyContent:"end",mt:"20px"}}>
          <Button variant="contained" >Add User</Button>  
        </Box>
    </Stack>
);
}
