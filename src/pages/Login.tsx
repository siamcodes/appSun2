import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
  IonButtons, IonBackButton, IonList, IonLabel, IonItem, IonInput
} from '@ionic/react';

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>เข้าใช้งาน</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password}></IonInput>
          </IonItem>
         
            <IonButton expand="block">Login</IonButton>
  
          <IonItem routerLink="/register">
            Not yet registered?  <a > Register </a>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;