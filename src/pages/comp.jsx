import {
  IonContent,
  IonButton,
  ionChange,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
  IonMenu,
} from '@ionic/react';

import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Wrapper from '../components/wrapper';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import {HeaderNameContext} from '../context/hearder';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
      height: '29px',
    },
  },
}));

export default function Comp() {
  const [currency, setCurrency] = React.useState('EUR');
  const classes = useStyles();
  const {ChangeheaderName} = React.useContext(HeaderNameContext);
  React.useEffect(() => {
    ChangeheaderName('Doctor Details');
  }, []);

  const scrollTo = (ref) => {
    if (ref /* + other conditions */) {
      ref.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const currencies = [
    {
      value: 'Closed',
      label: 'GP',
    },
    {
      value: 'Open',
      label: 'Specialist',
    },
  ];
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Wrapper>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="container">
          <TextField
            required
            id="outlined-required"
            label="Doctor Code"
            ///defaultValue="Employer Number"
            variant="outlined"
            // helperText="Please enter employee Number"
          />
          {/* <IonItem>
            <IonLabel>Select a Dog</IonLabel>
            <IonSelect value={value} onIonChange={e => setValue(e.detail.value)}>
              {options.map((option, i) => (
                <IonSelectOption value={option} key={i}>
                  {option}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem> */}

          <TextField
            id="filled-select-currency"
            select
            label="Type of Doctor"
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
        <br></br>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Doctor Name"
            //defaultValue="Contact Person"
            variant="outlined"
          />
        </div>
        <br></br>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Contact"
            //defaultValue="Employer Name"
            variant="outlined"
          />
        </div>
        <div>
          <br></br>
        </div>
        <div className="textsize">
          <TextField
            required
            id="outlined-required"
            label="Street Number"
            //defaultValue="Factory Address"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Postal Number"
            //defaultValue="Postal Address"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Firm Phone Number"
            //defaultValue="Firm Phone Number"
            variant="outlined"
          />
        </div>
        <div className="textsize">
          <TextField
            required
            id="outlined-required"
            label="Street Name"
            //defaultValue="Factory Address"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-disabled"
            label="City"
            //defaultValue="Postal Address"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Firm Fax Number"
            //defaultValue="Firm Phone Number"
            variant="outlined"
          />
        </div>
        <div className="textsize">
          <TextField
            required
            id="outlined-required"
            label="City"
            //defaultValue="Factory Address"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Postal Code"
            // defaultValue="Postal Address"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Firm Email Address"
            //defaultValue="Firm Phone Number"
            variant="outlined"
          />
        </div>
        <div className="container">
          <TextField
            required
            id="outlined-required"
            label="Zip Code"
            //defaultValue="Factory Address"
            variant="outlined"
          />
        </div>
        <div>
          <IonButton style={{float: 'right'}}>Print </IonButton>
          <IonButton style={{float: 'right'}}>Amend </IonButton>
          <IonButton style={{float: 'right'}}>Save </IonButton>
        </div>
      </form>
    </Wrapper>
  );
}
