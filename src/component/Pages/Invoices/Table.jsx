import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 , resizable: false },
  { field: 'registerId', headerName: 'Register ID', width: 70 , resizable: false },
  { field: 'name', headerName: 'Name', flex: 1 , resizable: false },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 , resizable: false},
  { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 , resizable: false },
  { field: 'email', headerName: 'email', flex: 1, resizable: false },
  { field: 'address', headerName: 'Address', width: 140, resizable: false },
  { field: 'city', headerName: 'City', flex: 1, resizable: false },
  { field: 'zipCode', headerName: 'Zip Code', type: 'number', width: 130 , resizable: false,cellClassName:"zipCode",headerAlign:"left"},
  
];

const rows = [
    { id: 1, registerId: '12345', name: 'Snow', age: 35, phoneNumber: '(213)-658627260', email: 'djelidrh@gmail.com', address: '33 Avenue Marc zuck', city: 'Paris', zipCode: '75001' },
    { id: 2, registerId: '12346', name: 'Lannister', age: 42, phoneNumber: '(213)-658627261', email: 'lannister@gmail.com', address: '34 Avenue Marc zuck', city: 'Paris', zipCode: '75002' },
    { id: 3, registerId: '12347', name: 'Stark', age: 45, phoneNumber: '(213)-658627262', email: 'stark@gmail.com', address: '35 Avenue Marc zuck', city: 'Paris', zipCode: '75003' },
    { id: 4, registerId: '12348', name: 'Targaryen', age: 30, phoneNumber: '(213)-658627263', email: 'targaryen@gmail.com', address: '36 Avenue Marc zuck', city: 'Paris', zipCode: '75004' },
    { id: 5, registerId: '12349', name: 'Baratheon', age: 25, phoneNumber: '(213)-658627264', email: 'baratheon@gmail.com', address: '37 Avenue Marc zuck', city: 'Paris', zipCode: '75005' },
    { id: 6, registerId: '12350', name: 'Greyjoy', age: 28, phoneNumber: '(213)-658627265', email: 'greyjoy@gmail.com', address: '38 Avenue Marc zuck', city: 'Paris', zipCode: '75006' },
    { id: 7, registerId: '12351', name: 'Martell', age: 32, phoneNumber: '(213)-658627266', email: 'martell@gmail.com', address: '39 Avenue Marc zuck', city: 'Paris', zipCode: '75007' },
    { id: 8, registerId: '12352', name: 'Tyrell', age: 27, phoneNumber: '(213)-658627267', email: 'tyrell@gmail.com', address: '40 Avenue Marc zuck', city: 'Paris', zipCode: '75008' },
    { id: 9, registerId: '12353', name: 'Bolton', age: 36, phoneNumber: '(213)-658627268', email: 'bolton@gmail.com', address: '41 Avenue Marc zuck', city: 'Paris', zipCode: '75009' },
    { id: 10, registerId: '12354', name: 'Mormont', age: 29, phoneNumber: '(213)-658627269', email: 'mormont@gmail.com', address: '42 Avenue Marc zuck', city: 'Paris', zipCode: '75010' },
    { id: 11, registerId: '12355', name: 'Tully', age: 34, phoneNumber: '(213)-658627270', email: 'tully@gmail.com', address: '43 Avenue Marc zuck', city: 'Paris', zipCode: '75011' },
    { id: 12, registerId: '12356', name: 'Arryn', age: 31, phoneNumber: '(213)-658627271', email: 'arryn@gmail.com', address: '44 Avenue Marc zuck', city: 'Paris', zipCode: '75012' }
];

const paginationModel = { page: 0, pageSize: 10 };

export default function InvoicesTable() {
return (
    <Paper sx={{ height:600, width: '100%',mt:"20px" }}>
        <DataGrid
            rows={rows}
            // @ts-ignore
            columns={columns}
            // @ts-ignore
            pagination={false}
            checkboxSelection
            slots={{ toolbar: GridToolbar }}
            sx={{border: 0.5,borderColor:grey[700],backgroundColor:"inherit",".zipCode":{textAlign:"start"}}}
        />
    </Paper>
);
}
