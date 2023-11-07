
import Chefs from '../Chefs/Chefs';
import Banner from './../Banner/Banner';
import Foods from './../Food/Foods';
import Inform from './../Inform/Inform';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Foods></Foods>
      <Chefs></Chefs>
      <Inform></Inform>
    </div>
  );
};

export default Home;