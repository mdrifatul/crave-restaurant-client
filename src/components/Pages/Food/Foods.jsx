import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useAxios from "../../Hooks/useAxiosSecure";

const Foods = () => {
  const axios = useAxios();
  const [food, setFood] = useState([]);

  useEffect(() =>{
    axios.get('/foods')
    .then(res=>{
      setFood(res.data)
    })
  },[axios])

  return (
  <>
  <div>
    <h1 className="text-center text-5xl font-bold text-[#7DA640] italic">Top selling</h1>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 lg:w-10/12 md:w-9/12 mx-auto my-20">
    {/* {
    food.slice(0,6).map(item => <Food key={item._id} item={item}></Food>
    )
    } */}
  </div>
  <div className="text-center my-16 ">
      <Link to='/fooditems'><button className="btn text-white bg-[#7DA640]">See All</button></Link>
  </div>
  </>
  )
};

export default Foods;