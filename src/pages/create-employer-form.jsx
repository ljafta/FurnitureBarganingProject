import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useForm, Controller, register} from 'react-hook-form';
import {makeStyles} from '@material-ui/core/styles';
import {MDBContainer, MDBInputGroup} from 'mdbreact';
import Wrapper from '../components/wrapper';
import TextField from '@material-ui/core/TextField';
import {home, star} from 'ionicons/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {FTextField} from '../components/FTextField';
import {Input, InputGroup} from 'rsuite';

import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import {useParams} from 'react-router';
import {
  IonContent,
  IonPage,
  IonItem,
  IonRange,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
  IonDatetime,
  IonHeader,
  IonIcon,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



let initialValues = {
  fullName: '',
  gender: '',
  techCos: '',
  email: '',
};

const styles = {
  marginBottom: 10,
};
const CustomInput = ({...props}) => <Input {...props} style={styles} />;
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 100,
  },
  text: {
    fontWeight: 'bold',
  },
  cell: {
    display: 'flex',
    flexDirection: 'row',
  },
  tableContainer: {
    marginTop: "30px",
    marginBottom: "20px"
  }
});

const CustomInputGroup = ({placeholder, ...props}) => (
  <InputGroup {...props} style={styles}>
    <Input placeholder={placeholder} />
    <InputGroup.Addon>
      <IonIcon icon="search" />
    </InputGroup.Addon>
  </InputGroup>
);

const CustomInputGroupWidthButton = ({placeholder, ...props}) => (
  <InputGroup {...props} inside style={styles}>
    <Input placeholder={placeholder} />
    <InputGroup.Button>
      <IonIcon icon="search" />
    </InputGroup.Button>
  </InputGroup>
);

const Schema = Yup.object().shape({
  doctorCode: Yup.string().required('Doctor Code is a required field'),
  typeOfDoctor: Yup.string().required('Type of Doctor is a required field'),
  contactPersonidNumber: Yup.string().required(
    'Contact Person ID Number is a required field'
  ),
  employerName: Yup.string().required('Employer Name is a required field'),
  typeOfDoctor: Yup.string().required('Type of Doctor is a required field'),
  employerNumber: Yup.string().required('Employer Number is a required field'),
  contactPerson: Yup.string().required('Contact Person is a required field'),
  //doctorName: Yup.string().required('Doctor Name is a required field'),
  // password: Yup.string().required("Password is a required field")
});

export default function CreateEmployer() {
  const {control, handleSubmit, formState, reset, errors, register} = useForm({
    defaultValues: {...initialValues},
    mode: 'onChange',
  });

  const classes = useStyles();

  const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994},
  ];
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };

  const {id} = useParams();

  const [rowState, setRowState] = React.useState([]);

  React.useEffect(() => {
    //ChangeheaderName("Create-Employer-Form")
  }, []);

  const obj = {
    name: 'jafta',
    salary: '22',
    age: '1',
    id: 15,
  };

  // const  endpointcreate  =  `http://dummy.restapiexample.com/api/v1/create`, ;

  async function componentCreate() {
    //debugger;
    const res = await axios.post(
      `http://dummy.restapiexample.com/api/v1/create`
    );
    setRowState(res.data.data);
    console.log('results from post', res.data);
  }

  // manage the Input
  const [inputValue, setInputValue] = useState();

  const [data, setData] = useState();

  /**
   *
   * @param _fieldName
   */
  const showError = (_fieldName) => {
    return (
      errors[_fieldName] && (
        <div
          style={{
            color: 'red',
            padding: 5,
            paddingLeft: 12,
            fontSize: 'smaller',
          }}
        >
          {_fieldName}: {errors[_fieldName].message || 'This field is required'}
        </div>
      )
    );
  };

  /**
   *
   * @param data
   */
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    setData(data);
  };

  const columns = [
    "Full Name",
    "ID Number",
    "Private Address",
    "Cell Number"
  ]
  console.log(inputValue);
  return (
    <IonContent>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)} style={{padding: 18}}>
          <Formik
            initialValues={{
              doctorCode: '',
              employerNumber: '',
              contactPerson: '',
              employerName: '',
              contactPersonidNumber: '',
              typeOfDoctor: '',
            }}
            validationSchema={Schema}
            onSubmit={(values, {setSubmitting}) => {
              console.log(values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FTextField
                      name="employerNumber"
                      type="text"
                      placeholder="Employer Number"
                      label="Employer Number"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="employerName"
                      type="text"
                      placeholder="Employer Name"
                      label="Employer Name"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <FTextField
                      name="contactPerson"
                      type="text"
                      placeholder="Contact Person"
                      label="Contact Person"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Autocomplete
                      {...flatProps}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="status"
                          label="Status"
                          placeholder="Status"
                        />
                      )}
                      onChange={(_, val) => {
                        console.log(val);
                        setFieldValue('status', val);
                      }}
                    />
                    <span style={{color: 'red'}}>
                      {errors.typeOfDoctor &&
                        touched.typeOfDoctor &&
                        errors.typeOfDoctor}
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="statuschangedate"
                      type="date"
                      placeholder="Status Changed Date"
                      label="Status Changed Date"
                      defaultValue="2020-05-24"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="directoridNumber"
                      type="text"
                      placeholder="Director's ID number"
                      label="Director's ID number"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <FTextField
                      name="tradingname"
                      type="text"
                      placeholder="Trading Name"
                      label="Trading Name"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="numberofemployees"
                      type="text"
                      placeholder="Number of Employees"
                      label="Number of Employees"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="directorNumber"
                      type="text"
                      placeholder="Director's Mobile Number"
                      label="Director's Mobile Number"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="registrationdate"
                      type="text"
                      placeholder="Registration Date"
                      label="Registration Date"
                    />
                  </Grid>
                </Grid>
                <br></br>
                <br></br>

                <ion-row>
                  <ion-col col-3>
                    <FTextField
                      name="factoryaddress"
                      type="text"
                      placeholder="Factory Address"
                      label="Factory Address"
                    />
                    <FTextField
                      name="surburb"
                      type="text"
                      placeholder="Surburb"
                      label="Surburb"
                    />
                    <FTextField
                      name="zipcode"
                      type="text"
                      placeholder="Zip Code"
                      label="Zip Code"
                    />
                  </ion-col>

                  <ion-col col-3>
                    <FTextField
                      name="postaladdress"
                      type="text"
                      placeholder="Postal Address"
                      label="Postal Address"
                    />
                    <FTextField
                      name="city"
                      type="text"
                      placeholder="City"
                      label="City"
                    />
                    <FTextField
                      name="postalcode"
                      type="text"
                      placeholder="Postal Code"
                      label="Postal Code"
                    />
                  </ion-col>
                  <ion-col col-3>
                    <FTextField
                      name="bussinessnumber"
                      type="text"
                      placeholder="Business Number"
                      label="Business Number"
                    />
                    <FTextField
                      name="faxnumber"
                      type="text"
                      placeholder="Fax Number"
                      label="Fax Number"
                    />
                    <FTextField
                      name="emailaddress"
                      type="text"
                      placeholder="Email Address"
                      label="Email Address"
                    />
                  </ion-col>
                </ion-row>
                <br></br>
                <br></br>

                <Grid container spacing={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Autocomplete
                        {...flatProps}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="area"
                            label="Area"
                            placeholder="Area"
                          />
                        )}
                        onChange={(_, val) => {
                          console.log(val);
                          setFieldValue('area', val);
                        }}
                      />
                      <span style={{color: 'red'}}>
                        {errors.typeOfDoctor &&
                          touched.typeOfDoctor &&
                          errors.typeOfDoctor}
                      </span>
                    </Grid>

                    {/* <MDBContainer>
                      <MDBInputGroup
                        containerClassName="mb-3"
                        prepend="Small"
                        size="sm"
                      />
                      <MDBInputGroup
                        containerClassName="mb-3"
                        prepend="Default"
                      />
                      <MDBInputGroup
                        containerClassName="mb-3"
                        prepend="Large"
                        size="lg"
                      />
                    </MDBContainer> */}

                    <Grid item xs={4}>
                      <FTextField
                        name="magestrialdistrict"
                        type="text"
                        placeholder="Magesterial District"
                        label="Magesterial District"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <br></br>

                 <TableContainer className={classes.tableContainer} component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead >
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell key={index} align={column.align}>
                        {column}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {rowState &&
                    rowState.map((_thing, _index) => {
                      console.log('_thing', _thing);
                      return ( */}
                        <TableRow>

                          <TableCell className="ion-text-wrap">
                           Sindiso
                          </TableCell>
                          <TableCell className="ion-text-wrap">
                          Sindiso
                          </TableCell>
                          <TableCell className="ion-text-wrap">
                          Sindiso
                          </TableCell>
                          <TableCell className="ion-text-wrap">
                          Sindiso
                          </TableCell>

                          {/* <TableCell>
                            <IonButton
                              title="Edit"
                              onClick={() => modalInfoWithEntry(_thing, _index)}
                            >
                              <IonIcon icon={create}></IonIcon>
                            </IonButton>
                            <IonButton
                              title="Delete"
                              onClick={() => deleteEntry(_thing.Id)}
                            >
                              <IonIcon icon={trash}></IonIcon>
                            </IonButton>
                          </TableCell> */}
                        </TableRow>
                      {/* );
                    })} */}
                  {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">Calories</TableCell>
              <TableCell align="left">Calories</TableCell>
              <TableCell align="left">Calories</TableCell>
            </TableRow>
          ))} */}

                  <p>
                    {/* <IonButton onClick={() => modalInfoWithEntry()}>
                      Create New Entry
                    </IonButton> */}
                  </p>
                </TableBody>
              </Table>
            </TableContainer>
                <IonButton type="submit">submit</IonButton>
              </Form>
            )}
          </Formik>

          {/* <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Employer Number:</IonLabel>

                <IonInput
                  type="text"
                  name="name"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                />
              </IonItem>
            </ion-col>
            <ion-col col-9>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Status</ion-label>

                <IonSelect required>
                  <IonSelectOption value="active">Active</IonSelectOption>
                  <IonSelectOption value="closed">Closed</IonSelectOption>
                                   
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-9>
              <IonItem>
                <IonLabel position="stacked">Contact Person:</IonLabel>
                <IonInput
                  type="text"
                  name="contactname"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Employer Name:</IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Trading Name</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Fnb</IonSelectOption>
                  <IonSelectOption value="Cheque">ABSA</IonSelectOption>
                  <IonSelectOption value="Cheque">Capitec</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>

            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Status Change Date:</IonLabel>
                <IonInput
                  type="text"
                  name="accountnumber"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Number of Employees</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Saving</IonSelectOption>
                  <IonSelectOption value="Cheque">Cheque</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">
                  Contact Person ID's number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="contact"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">
                  Contact Telephone Number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="branchcode"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Registration Date:</IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
            <ion-col col-3></ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">
                  Contact Cellphone Number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="contact"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Factory address:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">City:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Zip Code:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Postal Address:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Town:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Postal Code:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Firm Phone Number:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Firm Fax Number:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Firm Email Address:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Manegerial District:</IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">
                  Date Joined the Association
                </ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Fnb</IonSelectOption>
                  <IonSelectOption value="Cheque">ABSA</IonSelectOption>
                  <IonSelectOption value="Cheque">Capitec</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Area</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Fnb</IonSelectOption>
                  <IonSelectOption value="Cheque">ABSA</IonSelectOption>
                  <IonSelectOption value="Cheque">Capitec</IonSelectOption>
                </IonSelect>
              </ion-item>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Party or Non Party</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Saving</IonSelectOption>
                  <IonSelectOption value="Cheque">Cheque</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">
                  Name of Employer's Association:
                </IonLabel>
                <IonInput
                  type="text"
                  name="contact"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row> */}

          {/* <IonButton type="submit"  onClick={() => componentCreate()} routerLink="/doctorbrowse">
            submit
          </IonButton> */}
        </form>
      </Wrapper>
    </IonContent>
  );
}
