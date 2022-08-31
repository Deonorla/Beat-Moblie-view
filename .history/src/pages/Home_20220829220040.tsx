import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img src='assets\icon\beat.png' alt=''/>
          <IonTitle>Beat</IonTitle>
        </IonToolbar>
      </IonHeader>
 
    </IonPage>
  );
};

export default Home;
