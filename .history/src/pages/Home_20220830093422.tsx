import { IonContent} from '@ionic/react';
import Case from '../components/Case';
import Discount from '../components/Discount';
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Products from '../components/Products';
import Specs from '../components/Specs';
import Sponsor from '../components/Sponsor';

import './Home.css';

const Home: React.FC = () => {
  return (
  <IonContent>
    <Header />
    <Homepage />
    <Sponsor />
    <Specs />
    <Case />
    <Discount />
    <Products />
  </IonContent>

  );
};

export default Home;
