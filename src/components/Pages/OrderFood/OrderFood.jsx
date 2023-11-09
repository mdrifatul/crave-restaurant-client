import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxiosSecure";
import Loading from "../Loading/Loading";
import OrderList from "./OrderList";

const OrderFood = () => {
  const axios = useAxios()
  const {user, loading} = useAuth()
  const [orderFood, setOrderFood] = useState([])

  useEffect(()=>{
    axios.get(`/order?email=${user?.email}`)
    .then(res => setOrderFood(res.data))
  },[axios,user])


  // const {data,isLoading} = useQuery({
  //   queryKey: ["foodOrder",user?.email],
  //   queryFn: async () =>{
  //     const res = await axios.get(`http://localhost:5000/order?email=${user?.email}`)
           
  //     return res?.data
      
  //   }
  // }) 

  // console.log(data);
  // if(isLoading == true){
  //     return <Loading></Loading>
  // }

  return (
    <div>
    <Helmet><title>Crave | Order</title></Helmet>
      <div className="my-10 w-11/12 mx-auto">
      { loading? <Loading></Loading>:
        orderFood.map(order => <OrderList key={order._id} orderFood={orderFood} setOrderFood={setOrderFood} order={order}></OrderList>)
      }
    </div>
    </div>
    
  );
};

export default OrderFood;