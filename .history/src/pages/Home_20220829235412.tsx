import { IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
      </IonContent>
    </IonPage>
  );
};

export default Home;
