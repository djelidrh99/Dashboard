import Stack from "@mui/material/Stack";
import HeadTitle from "../../ReusableCompenent/HeadTitle";
import ContactTable from "./Table";



const Contacts = () => {
    return (
        <Stack
        direction="column"
            gap="10px"
        
        >
            <HeadTitle title={'CONTACTS'} subTitle={'List of Contacts for Future Reference'}/>
            <ContactTable/>
        </Stack>
    );
}

export default Contacts;