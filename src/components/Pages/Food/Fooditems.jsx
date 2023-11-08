import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import useAxios from "../../Hooks/useAxiosSecure";

const Fooditems = () => {
  const axios = useAxios();
  const [items, setItems]  = useState([]);
  const [search, setSearch] = useState('');
  const [filtervalue, setFiltervalue] = useState([])

  useEffect(() =>{
    axios.get('/foods')
    .then(res=>{
      setItems(res.data)
    })
  },[axios])

  const handleClick = () =>{
    const searchvalue = search.toLowerCase();
    const filterCard = items.filter(card => card.food_name.toLowerCase().includes(searchvalue))
    setFiltervalue(filterCard)
  }

  // console.log(filtervalue);

  return (
    <>
    <Helmet><title>Crave | All Food Items</title></Helmet>
      <div className="w-8/12 join mt-16 flex justify-center mx-auto">
        <input onChange={(e) =>setSearch(e.target.value)} className="input input-bordered join-item w-full " placeholder="Find You Food"/>
        <button onClick={handleClick} className="btn join-item bg-[#7DA640] text-white">Search</button>
      </div>
      <div>
      <div className="grid grid-cols-3 gap-6 w-10/12 mx-auto my-20">
      {/* {
        filtervalue == "" ?
        items.map(item=> <FoodCard item={item} key={item._id}></FoodCard>)
        : 
        filtervalue.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
      } */}
      </div>
      <div className="text-center mb-20">
      <div className="join">
        <button className="join-item btn bg-[#7DA640] text-white">«</button>
        <button className="join-item btn btn-active">1</button>
        <button className="join-item btn ">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn bg-[#7DA640] text-white">»</button>
      </div>
      </div>
    </div>
      
    </>
  );
};

export default Fooditems;