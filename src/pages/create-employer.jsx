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

export default function FormPropsTextFields() {
  const [currency, setCurrency] = React.useState('EUR');
  const classes = useStyles();
  const {ChangeheaderName} = React.useContext(HeaderNameContext);
  React.useEffect(() => {
    ChangeheaderName('Create Employer');
  }, []);

  const scrollTo = (ref) => {
    if (ref /* + other conditions */) {
      ref.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const currencies = [
    {
      value: 'Closed',
      label: 'closed',
    },
    {
      value: 'Open',
      label: 'open',
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
            label="Employer Number"
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
            label="Status"
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

          <TextField
            required
            id="outlined-required"
            label="Contact Person"
            //defaultValue="Contact Person"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Employer Name"
            //defaultValue="Employer Name"
            variant="outlined"
          />

          <TextField
            id="date"
            label="Status Change Date "
            type="date"
            defaultValue="2020-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Contact Person's ID Number"
            //defaultValue="Contact Person's ID Number"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Tading Name"
            //defaultValue="Tading Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Contact Phone Number"
            // defaultValue="Contact Phone Number"
            variant="outlined"
            inputProps={{
              style: {textAlign: 'right'},
            }}
          />
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
        <div className="container">
          <TextField
            id="filled-select-currency"
            select
            label="Area"
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
          <TextField
            required
            id="outlined-required"
            label="Magisterial District"
            //defaultValue="Factory Address"
            variant="outlined"
          />
          <TextField
            id="date"
            label="Date Joined Association "
            type="date"
            defaultValue="2020-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="filled-select-currency"
            select
            label="Under 5 Employees"
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
        <div className="container">
          <TextField
            id="date"
            label="Commencement Date "
            type="date"
            defaultValue="2020-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="filled-select-currency"
            select
            label="Party or Non Party"
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

          <TextField
            id="date"
            label="Returns Due payment date "
            type="date"
            defaultValue="2020-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Name"
            //defaultValue="Factory Address"
            variant="outlined"
          />
        </div>

        <div>
          <IonButton style={{float: 'right'}} routerLink="./create-employer">
            Print{' '}
          </IonButton>
          <IonButton style={{float: 'right'}} routerLink="./create-employer">
            Clear Fields{' '}
          </IonButton>
          <IonButton style={{float: 'right'}} routerLink="./create-employer">
            Save{' '}
          </IonButton>
        </div>
      </form>
    </Wrapper>
  );
}
