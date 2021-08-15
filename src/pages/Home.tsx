import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonList, IonLabel, IonIcon
} from '@ionic/react';

import { cafeOutline, chevronForwardOutline,logInOutline,
  personAddOutline, personCircleOutline, paperPlaneOutline
} from 'ionicons/icons';

import { Slide } from '../components/Slide';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem routerLink="/product">
            <IonIcon slot="start" icon={cafeOutline} />
            <IonLabel>Product</IonLabel>
            <IonIcon slot="end" icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink="/post">
            <IonIcon slot="start" icon={paperPlaneOutline} />
            <IonLabel>Post</IonLabel>
            <IonIcon slot="end" icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink="/profile">
            <IonIcon slot="start" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
            <IonIcon slot="end" icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink="/login">
            <IonIcon slot="start" icon={logInOutline} />
            <IonLabel>Login</IonLabel>
            <IonIcon slot="end" icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink="/register">
            <IonIcon slot="start" icon={personAddOutline} />
            <IonLabel>Register</IonLabel>
            <IonIcon slot="end" icon={chevronForwardOutline} />
          </IonItem>
        </IonList>

        <Slide />

      </IonContent>
    </IonPage>
  );
};

export default Home;
