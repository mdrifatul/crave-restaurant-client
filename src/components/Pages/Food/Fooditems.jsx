import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import useAxios from "../../Hooks/useAxiosSecure";
import FoodCard from "./FoodCard";

const Fooditems = () => {
  const axios = useAxios();
  const [items, setItems]  = useState([]);
  const [search, setSearch] = useState('');
  const [filtervalue, setFiltervalue] = useState([])
  const [page, setPage] = useState(1)
  const [total , setTotal] = useState(null);
  const limit = 6;

  useEffect(() =>{
    axios.get('/foods')
    .then(res=>{
      setItems(res.data?.result)
      setTotal(res.data?.total)
      console.log(res);
    })
  },[axios])

  const handleClick = () =>{
    const searchvalue = search.toLowerCase();
    const filterCard = items.filter(card => card.food_name.toLowerCase().includes(searchvalue))
    setFiltervalue(filterCard)
  }

  const handlePrevious = () =>{
    if(page > 1 ){ 
      setPage(page -1);
    }
  }
  const handleNext = () =>{
    if(page < totalpage){
      setPage(page + 1);
    }
  }

  const totalpage = Math.ceil(total / limit)
  console.log(totalpage);



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
      {
        filtervalue == "" ?
        items.map((item)=> <FoodCard item={item} key={item._id}></FoodCard>)
        : 
        filtervalue.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
      }
      </div>
      <div className="text-center mb-20">
      <div className="join border border-[#7DA640]">
        <button onClick={handlePrevious} className="join-item btn text-[#7DA640]">«</button>

        {Array(totalpage).fill(0).map((item, index)=>{
          const pageNumber = index + 1;
          <button
          key={pageNumber} 
          onClick={() => setPage(pageNumber)}
          className={`${pageNumber === page ? "join-item btn": "join-item bg-[#7DA640]"}`}>{pageNumber}</button>
        })
        }
        
        <button onClick={handleNext} className="join-item btn text-[#7DA640]">»</button>
      </div>
      </div>
    </div>
      
    </>
  );
};

export default Fooditems;