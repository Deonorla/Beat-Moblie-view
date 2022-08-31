import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Menu } from '../components/Menu';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='bg-black'>
        <IonToolbar>
          <IonTitle>Beat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
     
      </IonContent>
    </IonPage>
  );
};

export default Home;
