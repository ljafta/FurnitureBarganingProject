import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useForm, Controller} from 'react-hook-form';
import Wrapper from '../components/wrapper';
import TextField from '@material-ui/core/TextField';
import {home, star} from 'ionicons/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
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
import {FTextField} from '../components/FTextField';

import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Autocomplete from '@material-ui/lab/Autocomplete';

const Schema = Yup.object().shape({
  doctorCode: Yup.string().required('Doctor Code is a required field'),
  typeOfDoctor: Yup.string().required('Type of Doctor is a required field'),
  doctorName: Yup.string().required('Doctor Name is a required field'),
  // password: Yup.string().required("Password is a required field")
});

let initialValues = {
  fullName: '',
  gender: '',
  techCos: '',
  email: '',
};

export default function CreateDoc() {
  const {control, handleSubmit, formState, reset, errors, register} = useForm({
    defaultValues: {...initialValues},
    mode: 'onChange',
  });
  const {id} = useParams();

  const [rowState, setRowState] = React.useState([]);

  React.useEffect(() => {
    // ChangeheaderName("Create-Doc-Form")
  }, []);

  const obj = {
    name: 'jafta',
    salary: '22',
    age: '1',
    id: 15,
  };

  // const  endpointcreate  =  `http://dummy.restapiexample.com/api/v1/create`, ;

  async function componentCreate() {
    debugger;
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
   * @param data
   */
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    setData(data);
  };

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

  // console.log(inputValue);
  return (
    <IonContent>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)} style={{padding: 18}}>
          {/* <Box><IonInput>Batch Number </IonInput><IonInput>: Tr 92 </IonInput></Box>      */}

          {/* <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Doctor Code:</IonLabel>
                <IonInput
                  ref={register({
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  type="number"
                  name="doctorcode"
                ></IonInput>
              </IonItem>
            </ion-col>
            <ion-col col-9>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Type of Doctor</ion-label>
                <IonSelect>
                  <IonSelectOption value="GP">GP</IonSelectOption>
                  <IonSelectOption value="Surgeon">Surgeon</IonSelectOption>
                  <IonSelectOption value="Specialist">
                    Specialist
                  </IonSelectOption>
                  <IonSelectOption value="Pyschologist">
                    Pyschologist
                  </IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-9>
              <IonItem>
                <IonLabel position="stacked">Doctor Name:</IonLabel>
                <IonInput
                  ref={register({
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  // style={{ ...styles.input, borderColor: errors.username && "red" }}
                  type="text"
                  name="DoctorName"
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row> */}

          <Formik
            initialValues={{
              doctorCode: '',
              doctorName: '',
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
                {/* <IonItem>
            <IonLabel position="stacked" >Physical address:</IonLabel>
            <IonInput type="text" name="doctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}/>
               {errors.DoctorName && touched.DoctorName && errors.DoctorName}
            </IonItem> */}
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FTextField
                      name="doctorCode"
                      type="text"
                      placeholder="Doctor Code"
                      label="Doctor Code"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Autocomplete
                      {...flatProps}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="typeOfDoctor"
                          label="Type of Doctor"
                          placeholder="Type of Doctor"
                        />
                      )}
                      onChange={(_, val) => {
                        console.log(val);
                        setFieldValue('typeOfDoctor', val);
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
                      name="doctorName"
                      type="text"
                      placeholder="Doctor Name"
                      label="Doctor Name"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="contact"
                      type="text"
                      placeholder="Contact"
                      label="Contact"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FTextField
                      name="doctorCode"
                      type="text"
                      placeholder="Doctor Code"
                      label="Doctor Code"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Autocomplete
                      {...flatProps}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="typeOfDoctor"
                          label="Type of Doctor"
                          placeholder="Type of Doctor"
                        />
                      )}
                      onChange={(_, val) => {
                        console.log(val);
                        setFieldValue('typeOfDoctor', val);
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
                      name="doctorName"
                      type="text"
                      placeholder="Doctor Name"
                      label="Doctor Name"
                    />
                  </Grid>
                  <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FTextField
                      name="doctorCode"
                      type="text"
                      placeholder="Doctor Code"
                      label="Doctor Code"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Autocomplete
                      {...flatProps}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="typeOfDoctor"
                          label="Type of Doctor"
                          placeholder="Type of Doctor"
                        />
                      )}
                      onChange={(_, val) => {
                        console.log(val);
                        setFieldValue('typeOfDoctor', val);
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
                      name="doctorName"
                      type="text"
                      placeholder="Doctor Name"
                      label="Doctor Name"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="contact"
                      type="text"
                      placeholder="Contact"
                      label="Contact"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FTextField
                      name="doctorCode"
                      type="text"
                      placeholder="Doctor Code"
                      label="Doctor Code"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Autocomplete
                      {...flatProps}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="typeOfDoctor"
                          label="Type of Doctor"
                          placeholder="Type of Doctor"
                        />
                      )}
                      onChange={(_, val) => {
                        console.log(val);
                        setFieldValue('typeOfDoctor', val);
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
                      name="doctorName"
                      type="text"
                      placeholder="Doctor Name"
                      label="Doctor Name"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FTextField
                      name="contact"
                      type="text"
                      placeholder="Contact"
                      label="Contact"
                    />
                  </Grid>
                </Grid>
                </Grid>
                {/* <FTextField  name="email" type="email" placeholder="Email"/>
           {/* <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
            //  value={values.email}
           /> */}
                {/* <p style={{color: 'red'}}>{errors.email && touched.email && errors.email}</p>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
                <IonButton type="submit">submit</IonButton>
              </Form>
            )}
          </Formik>

          {/* <ion-row>
        <ion-col col-3>
         <IonItem>
            <IonLabel position="stacked" >Physical address:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)} required></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" >City:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)} required></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" >Zip Code:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)} required></IonInput>
            </IonItem>
            </ion-col>  
            
            <ion-col col-3>
         <IonItem>
            <IonLabel position="stacked" >Postal Address:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)} ></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" >Town:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" >Postal Code:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            </ion-col>  
            <ion-col col-3>
         <IonItem>
            <IonLabel position="stacked" >Phone Number:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" >Fax Number:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" >Email Address:</IonLabel>
            <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            </ion-col>  
            </ion-row>    

            <ion-row>
        <ion-col col-3>
         <IonItem>
            <IonLabel position="stacked" >Account Holder:</IonLabel>
            <IonInput type="text" name="accountholder" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
              <ion-item class="padding-left-2px">
            <ion-label position="stacked">Bank Name</ion-label>
            <IonSelect >
                  <IonSelectOption value="Saving">Fnb</IonSelectOption>
                  <IonSelectOption value="Cheque">ABSA</IonSelectOption>   
                  <IonSelectOption value="Cheque">Capitec</IonSelectOption>                                 
                </IonSelect>
          </ion-item>
           
            </ion-col>  
            
            <ion-col col-3>
         <IonItem>
            <IonLabel position="stacked" >Account Number:</IonLabel>
            <IonInput type="text" name="accountnumber" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            <ion-item class="padding-left-2px">
            <ion-label position="stacked">Acount Type</ion-label>
            <IonSelect >
                  <IonSelectOption value="Saving">Saving</IonSelectOption>
                  <IonSelectOption value="Cheque">Cheque</IonSelectOption>                                    
                </IonSelect>
          </ion-item>        
             </ion-col>  
            <ion-col col-3>      
            <IonItem>
            <IonLabel position="stacked" >Contact:</IonLabel>
            <IonInput type="text" name="contact" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" >Bank Branch Code:</IonLabel>
            <IonInput type="text" name="branchcode" value={rowState && rowState.employee_name}            
              onInput={(e) => setInputValue(e.target.value)}></IonInput>
            </IonItem>
            </ion-col>  
            </ion-row>  */}

          {/* <IonButton>Clear Fields</IonButton> */}
          {/* <IonButton type="submit"  onClick={() => componentCreate()} routerLink="/doctorbrowse">
            submit
          </IonButton>  */}
          {/* disabled={formState.isValid === false} */}
          {/* <IonButton type="submit">submittest</IonButton> */}
        </form>
      </Wrapper>
    </IonContent>
  );
}
