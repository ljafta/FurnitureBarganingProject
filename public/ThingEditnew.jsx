import React, { useState, useEffect } from "react";
import { IonModal } from "@ionic/react";
import {
  IonList,
  IonButton,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonLabel,
  IonInput
} from "@ionic/react";

/**
 * This component is used to edit or create a "thing"
 *
 * @param {*} param0
 */
const EditThing = ({ initValue, handleFormSubmit }) => {
  // manage the Input
  const [inputValue, setInputValue] = useState();

  // we are using this to set the initial value of the
  // input field
  useEffect(() => {
    setInputValue(initValue.value || null);
  }, [initValue]);

  /**
   * this is called when the user clicks either the save or cancel
   * button, on Save we return the string the user entered in the
   * input field, on cancek we dont return anything
   * @param {*} _save
   */
  const handleClick = (_save) => {
    handleFormSubmit({ isVisible: false, value: _save && inputValue });
  };

  return (
    <IonModal isOpen={initValue && initValue.isVisible}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Modify The Entry</IonCardTitle>
          <IonCardSubtitle>
            Demonstrating React Hooks API useReducer
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Input String</IonLabel>
            <IonInput
              value={inputValue}
              onInput={(e) => setInputValue(e.target.value)}
            />
          </IonItem>
          <IonButton onClick={() => handleClick(true)}>Save</IonButton>
          <IonButton onClick={() => handleClick(null)}>Cancel</IonButton>
        </IonCardContent>
      </IonCard>
    </IonModal>
  );
};

export default EditThing;
