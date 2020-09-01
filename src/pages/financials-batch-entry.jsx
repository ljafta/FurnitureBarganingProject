import {
    IonContent,
    IonButton,
    ionChange,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonText,
    IonMenu
  
  } from '@ionic/react';
  
  import React from 'react';
  import TextField from '@material-ui/core/TextField';
  import { makeStyles } from '@material-ui/core/styles';
  import Wrapper from '../components/wrapper';
  import MenuItem from "@material-ui/core/MenuItem";
  import Grid from "@material-ui/core/Grid";
  import { HeaderNameContext } from '../context/hearder';
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '30ch',
       height: '29px'
      },
    },
  }));
  
  export default function FinancialBatch() {
    const [currency, setCurrency] = React.useState("EUR");
    const classes = useStyles();
    const {ChangeheaderName}=React.useContext(HeaderNameContext);
    React.useEffect(()=>{
      ChangeheaderName("Batch-Entry-Overview")
    }, [])    
    
    const currencies = [
      {
        value: "Closed",
        label: "closed"
      },
      {
        value: "Open",
        label: "open"
      }
    ]
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    return (
      <Wrapper>
       <form className={classes.root} noValidate autoComplete="off">
          <div className="container">          
          <TextField
              id="filled-select-currency"
              select
              label="Contributions"
              value={currency}
              onChange={handleChange}
              // helperText="Please select your account status"
              variant="filled"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
      </div>
      <div> 
            
  
            <TextField
              required
              id="outlined-required"
              label="Batch Number"
              //defaultValue="Contact Person"
              variant="outlined"
            />
             <TextField
              required
              id="outlined-required"
              label="Page Number"
              //defaultValue="Employer Name"
              variant="outlined"
            />
             </div>
             <div>
            
            
              <TextField
              required
              id="outlined-required"
              label="Employer Number"
              //defaultValue="Tading Name"
              variant="outlined"
            />
             <TextField
              required
              id="outlined-required"
              label="Employer name"
              //defaultValue="Factory Address"
              variant="outlined"
            />
            
            </div>      
          <div className="textsize">
            <TextField
              required
              id="outlined-required"
              label="Post to period"
              //defaultValue="Factory Address"
              variant="outlined"
            />
            </div>
            <div>

            <TextField
              required
              id="outlined-disabled"
              label="TransPayment Date"
              //defaultValue="Postal Address"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-disabled"
              label="Month Pay Refers"
              //defaultValue="Firm Phone Number"
              variant="outlined"
            />          
          </div>  
          
          <div><IonButton style={{ float: 'right' }} routerLink="./create-employer">Print </IonButton></div>
          {/* <div><IonButton style={{ float: 'right' }} routerLink="./create-employer">Clear Fields </IonButton></div> */}
            <div><IonButton style={{ float: 'right' }} routerLink="./create-batch-entry">Capture </IonButton></div>
         
        </form>
      </Wrapper>
    );
  }
  