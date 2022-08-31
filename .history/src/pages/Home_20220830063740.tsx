import { IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Sponsor from '../components/Sponsor';

import './Home.css';

const Home: React.FC = () => {
  return (
  <IonContent>
    <Header />
    <Homepage />
    <Sponsor />
  </IonContent>

  );
};

export default Home;
