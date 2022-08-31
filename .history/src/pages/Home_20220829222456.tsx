import { IonButton, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Example Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonPage id="main">
      <IonContent>
        <IonMenuToggle>
          <IonButton>Toggle Menu</IonButton>
        </IonMenuToggle>
      </IonContent>
    </IonPage>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      
    </IonPage>
  );
};

export default Home;
