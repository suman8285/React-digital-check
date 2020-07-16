import React from 'react';
import HistoryTable from '../SendCheck/history/history-table';
import TextField from '@material-ui/core/TextField';

// import CheckDetails from './check-details/check-details';
export default function RequestCheck(props) {
    return (<div>
      {/* <CheckDetails/> */}
          <TextField id="outlined-basic" label="Payee Name" variant="outlined" />
      <TextField id="outlined-basic" label="Payee Email" variant="outlined" />
      <TextField id="outlined-basic" label="Amount" variant="outlined" />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <HistoryTable/>
      </div>);
  }