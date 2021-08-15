import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg
} from '@ionic/react';

const users = [
  {
    name: "สมเกียรติ ใจดี",
    email: "somkiat@sdtc.ac.th",
    address: "กรุงเทพ ประเทศไทย",
    photo: "./assets/somkiat.jpg"
  }
]

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
  
        {users.map((user, index) =>
          <IonCard key={index} >
            <IonImg src={user.photo} />
            <IonCardHeader>
              <IonCardTitle>{user.name}</IonCardTitle>
              <IonCardSubtitle>{user.email} </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{user.address}</p>
            </IonCardContent>
          </IonCard>
        )}

      </IonContent>
    </IonPage>
  );
};

export default Profile;
