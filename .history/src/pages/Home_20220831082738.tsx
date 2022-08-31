import { IonContent} from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Case from '../components/Case';
import Discount from '../components/Discount';
import Electronics from '../components/Electronics';
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Products from '../components/Products';
import Specs from '../components/Specs';
import Sponsor from '../components/Sponsor';
import { fetchData } from '../Redux/Features/cartSlice';

import './Home.css';

const Home: React.FC = () => {
  const dispatch = useDispatch()
     
    useEffect(() => {
       dispatch(fetchData())
    },[])
  return (
  <IonContent>
    <Header />
    <Homepage />
    <Sponsor />
    <Specs />
    <Case />
    <Discount />
    <Products />
    {/* <Electronics /> */}
  </IonContent>

  );
};

export default Home;
