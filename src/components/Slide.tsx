import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: true
};

const slides = [
  "../slides/pic1.jpg",
  "../slides/pic2.jpg",
  "../slides/pic3.jpg",
  "../slides/pic4.jpg",
  "../slides/pic5.jpg",
  "../slides/pic6.jpg",
]

export const Slide: React.FC = () => (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      {slides.map((item, index) =>
        <IonSlide key={index}>
          <IonImg src={item} />
        </IonSlide>
      )}
    </IonSlides>
  </IonContent>
);