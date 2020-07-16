import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Background from '../../../../public/cheque.png'

const numWords = require('num-words')

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    
  },
  floatLeft:{
    float:"left",
    // width:"50%"
    flex:"33%"
  },
  check: {
    width: "54vw",
    height: "44.5vh",
    backgroundImage:`url(${Background})`
  },
  date: {
    position: "relative",
    left: "550px",
    top: "55px"
  },
  amountDigits: {
    position: "relative",
    left: "600px",
    top: "75px"
  },
  description:{
    position: "relative",
    left: "50px",
    top: "100px"
  },
  signature: {
    position: "relative",
    left: "33vw",
    top: "14vh"
  },
  payeeName:{
    position: "relative",
    left: "90px",
    top: "70px"
  },
  row: {
    display:"flex", 
    "flex-direction":"row"
  },
  amount:{
    position: "relative",
    left: "40px",
    top: "70px"
  },
  bankDetails:{
    position: "relative",
    left: "3vw",
    top: "17vh",
    fontSize: "11px"
  },
}));


export default function CheckDetails(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    // selectedNavItem:navItems[0]
    payeeName: '',
    email:'',
    amount: 0,
    description:''
  });

  function send_check() {
    console.log("state is ",state)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="outlined-basic" label="Payee Name" variant="outlined" onChange={(e)=>setState({...state, payeeName: e.target.value})} />
      <TextField id="outlined-basic" label="Payee Email" variant="outlined" onChange={(e)=>setState({...state, email: e.target.value})}/>
      <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={(e)=>setState({...state, amount: e.target.value})} />
      <TextField id="outlined-basic" label="Description" variant="outlined"  onChange={(e)=>setState({...state, description: e.target.value})} />

     <div    style={{paddingLeft: "5vw"}}>
       
          
            
              
                <div    classname={classes.row}>
                  <div    classname={classes.row}>
                    <div    classname={classes.floatLeft}>
                      
                    </div>
                    <div     classname={classes.floatLeft} touranchor="tour-check-preview">
                      <div   >
                        <div    classname="col">
                          <div      >
                            <div    classname="checkWrapper">
                              <div    className={classes.check}>
                               <div     className={classes.date}>{new Date().toDateString()}</div>
                                <div    classname="checkElement previewReceiver" />
                                <div    classname="checkElement previewAmount">
                                <span    className={classes.payeeName}>{'Mr./Mrs. '+state.payeeName }</span>
                                </div>
                                <div    classname="checkElement previewAmount">
                                  <span     className={classes.amountDigits}><span>&#8377;</span>{state.amount}</span>
                                </div>
                               <div     className={classes.amount}>{numWords(state.amount)}</div>
                              <div     className={classes.description}>{(state.description)}</div>
                              <div     className={classes.signature}>sumannnnnnnnnnnnnnnn</div>
                                <div    className={classes.bankDetails}>
                                    <div    classname="previewSenderName">Axess Inc.</div>
                                    <div    classname="smallText">Bangalore</div>
                                    <div    classname="smallText">Standard chartered</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              <div       style={{display: 'flex',paddingTop:'5vh', justifyContent: 'flex-end',float: 'right'}}>
              <button variant="contained" style={{ float: 'right' }} color="primary" className="float-right"onClick={send_check}>
              Confirm &amp; Send Check &nbsp;
                </button>
              </div>
              
            
         
        
      
</div>
    </form>
  );
}
