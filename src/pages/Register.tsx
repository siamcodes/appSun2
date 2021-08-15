import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButtons, IonBackButton, IonButton, IonList, IonLabel, IonItem, IonInput
} from '@ionic/react';

import React, { useState } from 'react';

const Register: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput value={name}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password}></IonInput>
          </IonItem>
          <IonButton expand="block">Register</IonButton>
          <IonItem routerLink="/login">
            Already registered?  <a > Login </a>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Register;
