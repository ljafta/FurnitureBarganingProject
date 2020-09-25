import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useForm, Controller, register} from 'react-hook-form';
import {HeaderNameContext} from '../context/hearder';
import Wrapper from '../components/wrapper';
import TextField from '@material-ui/core/TextField';
import {home, star} from 'ionicons/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

let initialValues = {
  fullName: '',
  gender: '',
  techCos: '',
  email: '',
};

export default function CreateEmployee() {
  const {ChangeheaderName} = React.useContext(HeaderNameContext);
  const {control, handleSubmit, formState, reset, errors, register} = useForm({
    defaultValues: {...initialValues},
    mode: 'onChange',
  });

  console.log('errors keys', errors.keys);

  const rules = {
    required: (value) => !!value || 'Required.',
  };

  const {id} = useParams();

  const [rowState, setRowState] = React.useState([]);

  React.useEffect(() => {
    ChangeheaderName('Create-Employee-Profile');
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

  console.log(inputValue);
  return (
    <IonContent>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)} style={{padding: 18}}>
          {/* <Box><IonInput>Batch Number </IonInput><IonInput>: Tr 92 </IonInput></Box>      */}

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Benefit Number:</IonLabel>

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
                <ion-label position="stacked">Fund Type</ion-label>

                <IonSelect required>
                  <IonSelectOption value="active">Provident</IonSelectOption>
                  <IonSelectOption value="closed">Pension</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-9>
              <IonItem>
                <IonLabel position="stacked">Clock Number:</IonLabel>
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
                <IonLabel position="stacked">Surname:</IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Sex</ion-label>
                <IonSelect>
                  <IonSelectOption value="male">Male</IonSelectOption>
                  <IonSelectOption value="female">Female</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>

            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">ID Number:</IonLabel>
                <IonInput
                  type="text"
                  name="accountnumber"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Race</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Black</IonSelectOption>
                  <IonSelectOption value="Cheque">White</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">FirstName:</IonLabel>
                <IonInput
                  type="text"
                  name="contact"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Other name:</IonLabel>
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
                <IonLabel position="stacked">Home address:</IonLabel>
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
                <IonLabel position="stacked">Telephone Number:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Cellphone Number:</IonLabel>
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
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Employer Code</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">125</IonSelectOption>
                  <IonSelectOption value="Cheque">126</IonSelectOption>
                  <IonSelectOption value="Cheque">127</IonSelectOption>
                </IonSelect>
              </ion-item>

              <IonItem>
                <IonLabel position="stacked">Tax Number:</IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Employer Name:</IonLabel>
                <IonInput
                  type="number"
                  name="number"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                ></IonInput>
              </IonItem>

              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Works Status</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Active</IonSelectOption>
                  <IonSelectOption value="Cheque">Unemployed</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Occupation</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Saving</IonSelectOption>
                  <IonSelectOption value="Cheque">Cheque</IonSelectOption>
                </IonSelect>
              </ion-item>

              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Financial Status</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">C-Current</IonSelectOption>
                  <IonSelectOption value="Cheque">Saving</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Registration Date:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">First Contribution Date:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Last Contribution Date:</IonLabel>
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
                <IonLabel position="stacked">Account Holder:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Union Member:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Doctor Codes:</IonLabel>
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
                <IonLabel position="stacked">Bank Name</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Union Name:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Last Contribution Date:</IonLabel>
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
                <IonLabel position="stacked">Bank Branch Number:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Union Number:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Account Number:</IonLabel>
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
                <IonLabel position="stacked">Sick Fund Status:</IonLabel>

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
              <IonItem>
                <IonLabel position="stacked">Account Type:</IonLabel>

                <IonInput
                  type="text"
                  name="name"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                  required
                />
              </IonItem>
            </ion-col>
            <ion-col col-9></ion-col>
          </ion-row>

          <IonButton>Clear Fields</IonButton>
          {/* <IonButton type="submit"  onClick={() => componentCreate()} routerLink="/doctorbrowse">
            submit
          </IonButton> */}

          <IonButton type="submit" disabled={formState.isValid === false}>
            submittest
          </IonButton>
        </form>
      </Wrapper>
    </IonContent>
  );
}
