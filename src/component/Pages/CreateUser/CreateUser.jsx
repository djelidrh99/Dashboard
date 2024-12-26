import Stack from "@mui/material/Stack";

import HeadTitle from "../../ReusableCompenent/HeadTitle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form"
import { Typography, useTheme } from "@mui/material";
import validator from 'validator';



export default function CreateUser() {
    const theme =useTheme()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
      console.log(watch("example"))

    


return (
    <Stack onSubmit={handleSubmit(onSubmit)} component={'form'} sx={{pb:"10px"}} direction="column" gap="10px">
        <HeadTitle  title={"Team"} subTitle={"Managing the Team Members"} />
        <Stack sx={{mt:"20px"}}  direction="column" gap="40px" >
            <Stack direction="row" gap="10px">
                <Stack direction={'column'} sx={{flexGrow:1}}>
                <TextField sx={errors.firstName?{".css-ksl3ul-MuiFormLabel-root-MuiInputLabel-root":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::after":{borderColor:theme.palette.error.main},".css-snxp82-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::before":{borderColor:theme.palette.error.main}}:{}} {...register("firstName", { required: true,minLength:2 })}  id="first-name" label="First Name" variant="filled" />
                {errors.firstName && <Typography sx={{ml:"10px"}} color="error" variant="caption">This field is required & min 2 character</Typography>}
                </Stack>
                <Stack direction={'column'} sx={{flexGrow:1}}> 
                <TextField sx={errors.lastName?{".css-ksl3ul-MuiFormLabel-root-MuiInputLabel-root":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::after":{borderColor:theme.palette.error.main},".css-snxp82-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::before":{borderColor:theme.palette.error.main}}:{}} {...register("lastName", { required: true,minLength:2 })}  id="last-name" label="Last Name" variant="filled" />
                {errors.lastName && <Typography sx={{ml:"10px"}} color="error" variant="caption">This field is required & min 2 character</Typography>}
                </Stack>
           
            </Stack>
            <Box sx={{flexGrow:1,display:"flex",flexDirection:"column"}}>
            <TextField sx={errors.email?{".css-ksl3ul-MuiFormLabel-root-MuiInputLabel-root":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::after":{borderColor:theme.palette.error.main},".css-snxp82-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::before":{borderColor:theme.palette.error.main},flexGrow:1}:{flexGrow:1}} {...register("email", { required:true , validate:(value)=>validator.isEmail(value)  })}   id="email" label="Email" variant="filled" />
            {errors.email && <Typography sx={{ml:"10px"}} color="error" variant="caption">Please provide a valid email address</Typography>}
            </Box>

            <Box sx={{flexGrow:1,display:"flex",flexDirection:"column"}}>
            <TextField sx={errors.phoneNumber?{".css-ksl3ul-MuiFormLabel-root-MuiInputLabel-root":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::after":{borderColor:theme.palette.error.main},".css-snxp82-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{color:theme.palette.error.main},".css-up7vhn-MuiInputBase-root-MuiFilledInput-root::before":{borderColor:theme.palette.error.main},flexGrow:1}:{flexGrow:1}} {...register("phoneNumber", { required:true,validate:(value)=> validator.isMobilePhone(value,"any",{strictMode:true})  })}   id="phone-number" label="Phone Number" variant="filled" />
            {errors.phoneNumber && <Typography sx={{ml:"10px"}} color="error" variant="caption">Please provide a valid Phone number</Typography>}
            </Box>
            
        </Stack>

        <Stack sx={{mt:"40px"}}  direction="column" gap="20px" >
            <TextField {...register("addressOne")} sx={{flexGrow:1}} id="address-one" label="Address 1" variant="filled" />
            <TextField {...register("addressTwo")} sx={{flexGrow:1}} id="address-two" label="Address 2" variant="filled" />
            <FormControl variant="filled" sx={{ flexGrow:1 }}>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          id="role"
          {...register("role")}
          defaultValue={"Admin"}
        >
          
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Manager'}>Manager</MenuItem>
          <MenuItem value={'User'}>User</MenuItem>
        </Select>
      </FormControl>
        </Stack>

        <Box sx={{flexGrow:1,display:"flex",justifyContent:"end",mt:"20px"}}>
          <Button type="submit" variant="contained" >Add User</Button>  
        </Box>
    </Stack>
);
}
