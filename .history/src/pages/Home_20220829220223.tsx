import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='justify-between items-center'>
        <IonToolbar className=''>
          <img 
          src='assets\icon\beat.png' 
          alt=''/>
          <IonTitle>Beat</IonTitle>
        </IonToolbar>
      </IonHeader>
 
    </IonPage>
  );
};

export default Home;
