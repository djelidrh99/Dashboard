import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useTheme } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, resizable: false,headerAlign: 'center',cellClassName:"rowStyle" },
  { field: 'name', headerName: 'name', width: 130 , resizable: false ,headerAlign: 'center',cellClassName:"rowStyle"},
  { field: 'email', headerName: 'email', flex: 1, resizable: false ,headerAlign: 'center',cellClassName:"rowStyle" },
  {
    field: 'age',
    headerName: 'age',
    type: 'number',
    width: 90, resizable: false ,headerAlign: 'center',cellClassName:"rowStyle"
  },
  {
    field: 'phone',
    headerName: 'phone',
    flex: 1,
 resizable: false ,headerAlign: 'center',cellClassName:"rowStyle"
  },
  { field: 'access', headerName: 'access', flex: 1 , resizable: false ,headerAlign: 'center',cellClassName:"rowStyle", renderCell: (params) => params.value},
];





const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
    const theme =useTheme()


    const rows = [
        { id: 1, name: 'Snow', email: 'jonsnow@gmail.com', age: 35,phone:'(665)121-5454',access: <AccesBtn title={'Admin'} icon={<AdminPanelSettingsIcon />} bgColor={theme.palette.info.main}/> },
        { id: 2, name: 'Lannister', email: 'cerseilannister@gmail.com', age: 42,phone:'(665)121-5454',access:<AccesBtn title={'Admin'} icon={<AdminPanelSettingsIcon />} bgColor={theme.palette.info.main}/> },
        { id: 3, name: 'Lannister', email: 'jaimelannister@gmail.com', age: 45,phone:'(665)121-5454',access:<AccesBtn title={'Admin'} icon={<AdminPanelSettingsIcon />} bgColor={theme.palette.info.main}/> },
        { id: 4, name: 'Stark', email: 'anyastark@gmail.com', age: 16,phone:'(665)121-5454',access:<AccesBtn title={'Manage'} icon={<SecurityOutlinedIcon />} bgColor={theme.palette.secondary.dark}/> },
        { id: 5, name: 'Targaryen', email: 'daenerystargaryen@gmail.com', age: 16,phone:'(665)121-5454',access:<AccesBtn title={'Manage'} icon={<SecurityOutlinedIcon />} bgColor={theme.palette.secondary.dark}/> },
        { id: 6, name: 'Melisandre', email: 'evermelisandre@gmail.com'    , age: 150,phone:'(665)121-5454',access:<AccesBtn title={'Manage'} icon={<SecurityOutlinedIcon />} bgColor={theme.palette.secondary.dark}/> },
        { id: 7, name: 'Clifford', email: 'ferraraclifford@gmail.com', age: 44,phone:'(665)121-5454',access:<AccesBtn title={'Manager'} icon={<Person2OutlinedIcon />} bgColor={theme.palette.secondary.dark}/> },
        { id: 8, name: 'Frances', email: 'rossinifrances@gmail.com', age: 36,phone:'(665)121-5454',access:<AccesBtn title={'User'} icon={<Person2OutlinedIcon />} bgColor={theme.palette.success.main}/> },
        { id: 9, name: 'Roxie', email: 'harveyroxie@gmail.com', age: 65,phone:'(665)121-5454',access:<AccesBtn title={'User'} icon={<Person2OutlinedIcon />} bgColor={theme.palette.success.main}/> },
      ];

  return (
    <Paper sx={{mt:"20px", height: 'auto', width: '100%',".rowStyle":{textAlign:"center !important"} }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        disableVirtualization
        sx={{ border: 0.5,borderColor:grey[700],backgroundColor:"inherit",textAlign:"center" ,overflow:"hidden"}}
      />
    </Paper>
  );
}

function AccesBtn({title,icon,bgColor}){
    return(
<Button onClick={(event) => { event.preventDefault() }} sx={{cursor:"text", py:0.5,px: 1,fontWeight:"bold",fontSize:"11px",color:"white",width:"90px",backgroundColor:bgColor}} variant="contained" startIcon={icon}>{title}</Button>
    )
}


