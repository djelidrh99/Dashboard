import Stack from '@mui/material/Stack'
import InvoicesTable from './Table'
import HeadTitle from "../../ReusableCompenent/HeadTitle";

export default function Invoices() {
  return (
    <Stack
        direction="column"
            gap="10px"
        
        >
            <HeadTitle title={'INVOICES'} subTitle={'List of Invoice Balances'}/>
            <InvoicesTable/>

        </Stack>
  )
}
