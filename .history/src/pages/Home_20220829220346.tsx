import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='justify-between items-center'>
        <IonToolbar className=''>
          <IonTitle>
          <img 
          src='assets\icon\beat.png' 
          alt=''/>
            Beat
            </IonTitle>
        </IonToolbar>
      </IonHeader>
 
    </IonPage>
  );
};

export default Home;
