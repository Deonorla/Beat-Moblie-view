import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Menu } from '../components/Menu';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Menu />
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
     
      </IonContent>
    </IonPage>
  );
};

export default Home;
