import React from 'react';
import HistoryTable from './history/history-table'
import CheckDetails from './check-details/check-details';
export default function SendCheck(props) {
    return (<div>
      <CheckDetails/>
      <HistoryTable/>
      </div>);
  }