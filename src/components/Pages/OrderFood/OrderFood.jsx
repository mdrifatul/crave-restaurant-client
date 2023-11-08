import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxiosSecure";
import OrderList from './OrderList';

const OrderFood = () => {
  const axios = useAxios()
  const {user} = useAuth()
  const [orderFood, setOrderFood] = useState([])

  useEffect(()=>{
    axios.get(`/order?email=${user?.email}`)
    .then(res => setOrderFood(res.data))
  },[axios,user])

  return (
    <div className="my-10 w-11/12 mx-auto">
      <Helmet><title>Crave | Order</title></Helmet>
      {
        orderFood.map(order => <OrderList key={order._id} orderFood={orderFood} setOrderFood={setOrderFood} order={order}></OrderList>)
      }
    </div>
  );
};

export default OrderFood;