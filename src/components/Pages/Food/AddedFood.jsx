import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxiosSecure";
import Loading from "../Loading/Loading";
import AddedFoodCard from "./AddedFoodCard";

const AddedFood = () => {
  const axios = useAxios() 
  const {user, loading} = useAuth();
  const [addedFood, setAddedFood] = useState([]);

  useEffect(()=>{
    axios.get(`/addFood?email=${user?.email}`)
    .then(res=> setAddedFood(res.data))
  },[axios,user])

  return (
    <>
    <Helmet><title>Crave | Added Food</title></Helmet>
    
    { loading ? <Loading></Loading>:
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 lg:w-10/12 md:w-9/12 mx-auto my-20">
      {
      addedFood.map(food => <AddedFoodCard key={food._id} food={food}></AddedFoodCard>)
      }
    </div>
    }
    </>
    
    
  );
};

export default AddedFood;