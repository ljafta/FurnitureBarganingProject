import React, {useState} from 'react';
//import useThings from "./useThings";
//import ThingEdit from "./ThingEdit";
import UseThings from '../components/UseThings';
import EditDocRefData from '../components/EditDocRefData';

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
} from '@ionic/react';

const docreference = (props) => {
  // using the useState functionality to manage displaying the modal
  // dialog for inputting data for new things or editing things
  const [modalInfo, setModalInfo] = useState({isVisible: false, value: ''});

  // recommended
  // const [modalIsVisible, setModalIsVisible] = useState(false);
  // const [modalValue, setModalValue] = useState("");

  // get the function from my custon hook to mange the list
  // of things
  let {state, dispatch} = useThings();

  /**
   * add entry to the list using `dispatch` from custom hook
   */
  const addNewEntry = (_data) => {
    debugger;
    dispatch({type: 'ADD_THING', data: _data});
  };

  /**
   * remove entry from the list using `dispatch` and index in the array
   * to call custom hook
   * @param {*} _index
   */
  const deleteEntry = (_index) => {
    dispatch({type: 'DELETE_THING', index: _index});
  };

  /**
   * update an existing entry in the list based on data
   * and the index of the entry
   * @param {*} _index
   * @param {*} _data
   */
  const editEntry = (_index, _data) => {
    debugger;
    let payload = {index: _index, data: _data};
    dispatch({type: 'EDIT_THING', ...payload});
  };

  /**
   * show the modal to edit the entry, we need the current data
   * and the index of the element
   *
   * @param {*} _entryValue
   * @param {*} _index
   */
  const modalInfoWithEntry = (_entryValue, _index) => {
    debugger;
    setModalInfo({isVisible: true, value: _entryValue, index: _index});
  };

  /**
   * get the response from the modal/form so we can update or create
   * a new item. if the value is empty then ignore because the user
   * selected the cancel button.
   *
   * If there is a value & and index, then
   * edit the item, if no index then create a new item
   * @param {*} _value
   */
  const handleFormSubmit = (_formResponse) => {
    if (_formResponse.value) {
      modalInfo.index != null
        ? editEntry(modalInfo.index, _formResponse.value)
        : addNewEntry(_formResponse.value);
    }
    // reset the mondalInfo state
    setModalInfo({...modalInfo, isVisible: false, value: ''});
  };

  return (
    <IonContent padding>
      <EditDocRefData
        initValue={modalInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <div style={{padding: 10}}>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Use Things List Component</IonCardTitle>
            <IonCardSubtitle>
              Demonstrating React Hooks API useReducer
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonList>
              {state.things.map((_thing, _index) => (
                <IonItem key={_index}>
                  <IonLabel className="ion-text-wrap">{_thing}</IonLabel>
                  <IonButton onClick={() => modalInfoWithEntry(_thing, _index)}>
                    Edit
                  </IonButton>
                  <IonButton color="danger" onClick={() => deleteEntry(_index)}>
                    Delete
                  </IonButton>
                </IonItem>
              ))}
            </IonList>
            <p>
              <IonButton onClick={() => modalInfoWithEntry()}>
                Add Entry
              </IonButton>
            </p>
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  );
};

export default docreference;
