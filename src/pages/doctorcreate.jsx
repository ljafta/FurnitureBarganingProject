import {IonContent, IonButton, ionChange} from '@ionic/react';

import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Wrapper from '../components/wrapper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormDocsTextFields() {
  const classes = useStyles();

  return (
    <Wrapper>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Employer Number"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Status"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Contact Person"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Employer Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Status  Change Date"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Contact Person's ID Number"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Tading Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Contact Phone Number"
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Factory Address"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Postal Address"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Firm Phone Number"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Area"
            variant="outlined"
          />
        </div>
        <div>
          <IonButton style={{float: 'right'}}>Print </IonButton>
          <IonButton style={{float: 'right'}} routerLink="./doctorcreate">
            Create New{' '}
          </IonButton>
        </div>
      </form>
    </Wrapper>
  );
}
