
import { Helmet } from 'react-helmet';
import Chefs from '../Chefs/Chefs';
import Foods from '../Food/Foods';
import Banner from './../Banner/Banner';
import Inform from './../Inform/Inform';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Crave | Home</title>
      </Helmet>
      <Banner></Banner>
      <Foods></Foods>
      <Chefs></Chefs>
      <Inform></Inform>
    </div>
  );
};

export default Home;