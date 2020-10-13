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
import {HeaderNameContext} from '../context/hearder';

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
  // doctorCode: Yup.string().required('Doctor Code is a required field'),
  // typeOfDoctor: Yup.string().required('Type of Doctor is a required field'),
  // doctorName: Yup.string().required('Doctor Name is a required field'),
  // contact: Yup.string().required('Doctor Name is a required field'),
  // password: Yup.string().required("Password is a required field")
});

let initialValues = {
  fullName: '',
  gender: '',
  techCos: '',
  email: '',
};

const obj ={
    DoctorTypeId: 3,
    DoctorType: " ",
    Code:"",
    FullName:"",
     ContactName:"",
     Address1:"", 
     Address2:"",
     Address3:"",
     PostalCode:"",
     MailAddress1:"",
     MailAddress2:"", 
     MailAddress3:"",
     MailPostalCode:"",
     Telephone:"",
     Mobile:"",
     Email:"",
     Fax:"",
     AccountHolder:" ",
     BankId:6,Bank:"",
     BranchCode:"",
     AccountNumber:"",
     AccountTypeId:5,
     AccountType:"",
     Id:2,
     CreatedById:3,
     CreateDate:"2020-10-05T06:09:53",
     UpdatedById:1,
     UpdateDate:"2020-10-05T06:11:54",
     IsActive:true

    }

export default function CreateDoc() {
  const {control, formState, reset, handleSubmit,errors, register} = useForm({
    defaultValues: {...initialValues},
    mode: 'onChange',
  });
  const {id} = useParams();
  const {ChangeheaderName} = React.useContext(HeaderNameContext);

  const [rowState, setRowState] = React.useState([obj]);

  
  React.useEffect(() => {
     ChangeheaderName("Create-Doc-Form")

     
  }, []);

  
  // const  endpointcreate  =  `http://dummy.restapiexample.com/api/v1/create`, ;

  // async function componentCreate() {
  //   debugger;
  //   const res = await axios.post(
  //     `http://dummy.restapiexample.com/api/v1/create`
  //   );
  //   setRowState(res.data.data);
  //   console.log('results from post', res.data);
  // }

 
    const addNewEntry = async () => {
      try {
        debugger;
        const response = await axios.post(
          'https://3zpjzh9s97.execute-api.eu-west-1.amazonaws.com/dev/doctor', rowState);
           
        if (response) {
          const stateData = [...rowState];
          stateData.push(rowState);
          setRowState(stateData);
        } else {
          alert('Something went wrong while adding ');
        }
      } catch (error) {
        // dispatch(error);
        console.log('Error: ', error);
        alert('Something went wrong while adding user details ', error.message);
  
      }
    };
    
  

  // manage the Input

  
const [inputValue, setInputValue] = useState({  
  });

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
        <form onSubmit={handleSubmit(onSubmit)} style={{padding: 18}} >
          <Formik
            initialValues={{
              doctorCode: '',
              doctorName: '',
              typeOfDoctor: '',
              contact: '',
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
                      name="telephone"
                      type="text"
                      placeholder="Telephone"
                      label="Telephone"

                       
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
                      placeholder="Address"
                      label="Address"

                     
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
                      name="cellphonenumber"
                      type="text"
                      placeholder="Cell Phone Number"
                      label="Cell Phone Number"
                    
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
                      <FTextField
                        name="accountholder"
                        type="text"
                        placeholder="Account Holder"
                        label="Account Holder"

                       
                         
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Autocomplete
                        {...flatProps}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="bankname"
                            label="Bank Name"
                            placeholder="Bank Name"

                            
                          />
                        )}
                        onChange={(_, val) => {
                          console.log(val);
                          setFieldValue('bankname', val);
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
                        name="bankbranchnumber"
                        type="text"
                        placeholder="Bank Branch Code"
                        label="Bank Branch Code"
                        
                      
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FTextField
                        name="accountnumber"
                        type="text"
                        placeholder="Account Number"
                        label="Account Number"

                       
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Autocomplete
                        {...flatProps}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="accounttype"
                            label="Account Type"
                            placeholder="Account Type"

                          
                          />
                        )}
                        onChange={(_, val) => {
                          console.log(val);
                          setFieldValue('accounttype', val);
                        }}
                      />
                      <span style={{color: 'red'}}>
                        {errors.typeOfDoctor &&
                          touched.typeOfDoctor &&
                          errors.typeOfDoctor}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <br></br>
                <IonButton type="submit" onClick={() => addNewEntry()} routerLink="/doctorbrowse">submit</IonButton>
                 {/* <IonButton type="submit"  onClick={() => componentCreate()} routerLink="/doctorbrowse">
            submit
          </IonButton> */}
              </Form>
            )}
          </Formik>
        </form>
      </Wrapper>
    </IonContent>
  );
}
