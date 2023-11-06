import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxiosSecure";
import FoodCard from "./FoodCard";

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
      <div className="w-8/12 join mt-16 flex justify-center mx-auto">
        <input onChange={(e) =>setSearch(e.target.value)} className="input input-bordered join-item w-full " placeholder="Find You Food"/>
        <button onClick={handleClick} className="btn join-item bg-[#7DA640] text-white">Search</button>
      </div>

      <div className="grid grid-cols-3 gap-6 w-10/12 mx-auto my-20">
      {/* {
        items.map(item=> <FoodCard item={item} key={item._id}></FoodCard>)
      } */}
      {
        filtervalue == "" ?
        items.map(item=> <FoodCard item={item} key={item._id}></FoodCard>)
        : 
        filtervalue.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
      }
      </div>
    </>
  );
};

export default Fooditems;