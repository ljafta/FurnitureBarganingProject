import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useForm, Controller} from 'react-hook-form';
import Wrapper from '../components/wrapper';
import TextField from '@material-ui/core/TextField';
import {home, star} from 'ionicons/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
export default function CreateDoctor() {
  const {control, handleSubmit, formState, reset, errors} = useForm({
    defaultValues: {...initialValues},
    mode: 'onChange',
  });

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
    <IonPage>
      <IonContent>
        <Wrapper>
          <form onSubmit={handleSubmit(onSubmit)} style={{padding: 18}}>
            {/* <Box><IonInput>Batch Number </IonInput><IonInput>: Tr 92 </IonInput></Box>      */}

            <ion-row>
              <ion-col col-3>
                <IonItem>
                  <IonLabel position="stacked">Doctor Code:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
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
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col col-9>
                <ion-item class="padding-left-2px">
                  <ion-label position="stacked">Contact</ion-label>
                  <ion-input type="tel" formControlName="phoneNumber">
                    {' '}
                  </ion-input>
                  {/* <IonInput name="Contact" value={inputValue && inputValue.population} 
              onInput={(e) => setInputValue(e.target.value)}></IonInput> */}
                </ion-item>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col col-3>
                <IonItem>
                  <IonLabel position="stacked">Physical address:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">City:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Zip Code:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
              </ion-col>
              <ion-col col-3>
                <IonItem>
                  <IonLabel position="stacked">Postal Address:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Town:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Postal Code:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
              </ion-col>
              <ion-col col-3>
                <IonItem>
                  <IonLabel position="stacked">Phone Number:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Fax Number:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Email Address:</IonLabel>
                  <IonInput type="text" name="DoctorName"></IonInput>
                </IonItem>
              </ion-col>
            </ion-row>
            <IonButton
              type="button"
              onClick={() => {
                reset(initialValues);
              }}
            >
              Clear Fields
            </IonButton>
            <IonButton type="submit" disabled={formState.isValid === false}>
              submit
            </IonButton>
          </form>
        </Wrapper>
      </IonContent>
    </IonPage>
  );
}
