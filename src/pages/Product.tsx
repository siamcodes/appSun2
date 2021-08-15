import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg
} from '@ionic/react';

import data from '../data'

const Product: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {data.products.map((p, index) =>
          <IonCard key={index}>
            <IonImg src={p.photo} />
            <IonCardHeader>
              <IonCardTitle>{p.name}</IonCardTitle>
              <IonCardSubtitle>ราคา {p.price} บาท</IonCardSubtitle>
              <IonCardSubtitle>จำนวนในคลัง {p.stock} </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              รายละเอียด
              <p>{p.description}</p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Product;
