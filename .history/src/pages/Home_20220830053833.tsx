import { IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header';
import Homepage from '../components/Homepage';

import './Home.css';

const Home: React.FC = () => {
  return (
<IonContent>
<Header />
<Homepage />
</IonContent>

  );
};

export default Home;
