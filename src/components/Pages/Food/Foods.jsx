import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxiosSecure";
import Loading from "../Loading/Loading";
import Food from './Food';

const Foods = () => {
  const axios = useAxios();
  const {loading} = useAuth();
  const [food, setFood] = useState([]);
  console.log(food);
  useEffect(() =>{
    axios.get('/foods?sortField=order_count&sortOrder=desc')
    .then(res=>{
      setFood(res.data?.result)
    })
  },[axios])
  console.log(food);
  return (
  <>
  <div>
    <h1 className="text-center text-5xl font-bold text-[#7DA640] italic">Top selling</h1>
  </div>
  
  {loading? 
    <div className="flex justify-center items-center"><Loading></Loading></div>
    :
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 lg:w-10/12 md:w-9/12 mx-auto my-20">
    {
    food&&food.slice(0,6).map(item => <Food key={item._id} item={item}></Food>
    )
    }
  </div>
  }
  <div className="text-center my-16 ">
      <Link to='/fooditems'><button className="btn text-white bg-[#7DA640]">See All</button></Link>
  </div>
  </>
  )
};

export default Foods;