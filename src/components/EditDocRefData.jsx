// import React, { useState, useEffect } from "react";
// import { IonModal } from "@ionic/react";
// import {
//   IonList,
//   IonButton,
//   IonContent,
//   IonCard,
//   IonCardContent,
//   IonItem,
//   IonCardTitle,
//   IonCardSubtitle,
//   IonCardHeader,
//   IonLabel,
//   IonInput
// } from "@ionic/react";

// import axios from 'axios';
// import {useParams} from 'react-router'

// /**
//  * This component is used to edit or create a "thing"
//  *
//  * @param {*} param0
//  */
// const EditDocRef = ({ initValue, handleFormSubmit }) => {

//   // manage the Input
//   const [inputValue, setInputValue] = useState();

//   const [name, setName] = useState();
//   const [desc, setDesc] = useState();
//   const [sort, setSort] = useState();

//   // we are using this to set the initial value of the
//   // input field

//   /**
//    * this is called when the user clicks either the save or cancel
//    * button, on Save we return the string the user entered in the
//    * input field, on cancek we dont return anything
//    * @param {*} _save
//    */
//   // const handleClick = (_save) => {
//   //  console.log("save", _save)
//   //   handleFormSubmit({ isVisible: false, value: _save && {name, desc, sort} });

//   // };
//   const handleClick = (_save) => {
//     handleFormSubmit({ isVisible: false, value: _save && inputValue });
//   };

//   const {id} = useParams();
//   const [rowState, setRowState] = React.useState([]);

//   useEffect(() => {
//     setInputValue(initValue.value || null);
//   }, [initValue]);

//   const  endpoint  =  `http://dummy.restapiexample.com/api/v1/employee/1`;

//   async function componentEdit() {

//     const res = await axios.get(endpoint)
//     setRowState(res.data.data);
//     console.log("res", res.data.data)
//   };
//   console.log("inpuvalue", inputValue)
//   return (
//         <IonModal isOpen={initValue && initValue.isVisible}>
//           <IonCard>
//             <IonCardHeader>
//               <IonCardTitle>Modify Doctor's Reference Data</IonCardTitle>
//               {/* <IonCardSubtitle>
//                 Demonstrating React Hooks API useReducer
//               </IonCardSubtitle> */}
//             </IonCardHeader>
//             <IonCardContent>
//             <IonItem>
//                 <IonLabel position="stacked">Short Code:</IonLabel>
//                 <IonInput type="text" name="DoctorName"value={inputValue && inputValue.name}
//                   onInput={(e) => setName(e.target.value)}></IonInput>

//                   </IonItem>
//                 <IonItem>
//                 <IonLabel position="stacked">Description:</IonLabel>
//                 <IonInput type="text" name="DoctorName" value={inputValue && inputValue.desc}
//                   onInput={(e) => setDesc(e.target.value)}></IonInput>
//                 </IonItem>
//                 <IonItem>
//                 <IonLabel position="stacked">Sort:</IonLabel>
//                 <IonInput type="text" name="DoctorName" value={inputValue && inputValue.sort}
//                   onInput={(e) => setSort(e.target.value)}></IonInput>
//                 </IonItem>

//               <IonButton onClick={() => handleClick(true)}>Save</IonButton>
//               <IonButton onClick={() => handleClick(null)}>Cancel</IonButton>
//             </IonCardContent>
//           </IonCard>
//         </IonModal>
//       );
//     };

// export default EditDocRef;
import React, {useState, useEffect} from 'react';
import {IonModal} from '@ionic/react';
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
  IonInput,
} from '@ionic/react';

/**
 * This component is used to edit or create a "thing"
 *
 * @param {*} param0
 */
const EditDocRef = ({initValue, handleFormSubmit}) => {
  //manage the Input
  const [inputValue, setInputValue] = useState({
    name: '',
    desc: '',
    sort: '',
  });

  //const [inputValue, setInputValue] = useState([]);

  const printValues = (e) => {
    e.preventDefault();
  };

  const updateField = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

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
    handleFormSubmit({isVisible: false, value: _save && inputValue});
  };

  return (
    <IonModal isOpen={initValue && initValue.isVisible}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Modify The Entry</IonCardTitle>
          <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          {/* <IonItem>
            <IonInput
              value={inputValue}
              onInput={(e) => setInputValue(e.target.value)}
            />
              </IonItem>
            */}

          <IonItem>
            <IonLabel position="stacked">Short Code:</IonLabel>
            <IonInput
              type="text"
              name="DoctorName"
              value={inputValue && inputValue.name}
              onIonChange={(e) =>
                e.target &&
                e.target.value &&
                setInputValue((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Description:</IonLabel>
            <IonInput
              type="text"
              name="DoctorName"
              value={inputValue && inputValue.desc}
              onIonChange={(e) =>
                e.target &&
                e.target.value &&
                setInputValue((prevState) => ({
                  ...prevState,
                  desc: e.target.value,
                }))
              }
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Sort:</IonLabel>
            <IonInput
              type="text"
              name="DoctorName"
              value={inputValue && inputValue.sort}
              onIonChange={(e) =>
                e.target &&
                e.target.value &&
                setInputValue((prevState) => ({
                  ...prevState,
                  sort: e.target.value,
                }))
              }
            ></IonInput>
          </IonItem>

          <IonButton onClick={() => handleClick(true)}>Save</IonButton>
          <IonButton onClick={() => handleClick(null)}>Cancel</IonButton>
        </IonCardContent>
      </IonCard>
    </IonModal>
  );
};

export default EditDocRef;
