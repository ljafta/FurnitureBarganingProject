import React, {RefObject} from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';

class MyModal extends React.Component {
  headerRef: RefObject<HTMLIonHeaderElement> = React.createRef();

  async closeModal() {
    if (!this.headerRef || !this.headerRef.current) {
      return;
    }

    await (this.headerRef.current.closest(
      'ion-modal'
    ) as HTMLIonModalElement).dismiss();
  }

  render() {
    return (
      <>
        <IonHeader ref={this.headerRef}>
          <IonToolbar color="primary">
            <IonTitle>My Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => this.closeModal()}>
                <IonIcon name="close" slot="icon-only"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>This is the modal content 3.</p>
        </IonContent>
      </>
    );
  }
}

export default MyModal;
