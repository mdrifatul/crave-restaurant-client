import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxiosSecure";

const Purchase = () => {
    const axios = useAxios()
    const loader = useLoaderData();
    const {user} = useAuth()
    // console.log(user.displayName);
    const {food_name,price,food_image} = loader


    const handleAddFood = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name")
        const price = form.get("price")
        const username = form.get("username")
        const email = form.get("email");
        const quantity = form.get("quantity");
        const date = form.get("date");
        const image = form.get("image")
        const userinfo = {
        name,email,price, username, quantity, date,image 
        }
        axios.post('/order',userinfo)
          .then(res=>{
            console.log(res.data)
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Successfully added',
              showConfirmButton: false,
              timer: 1500
            })
          })
    }

    


  return (
    <div className="w-8/12 mx-auto my-20">
        <Helmet><title>Crave | Purchase</title></Helmet>
          <h2 className='text-center text-3xl'> </h2>
          <form onSubmit={handleAddFood} >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                      <input type="text" name="name" className="input input-bordered" placeholder="food name" defaultValue={food_name} />
                  </div>
                  <div className="form-control">
                      <input type="number" name="price" className="input input-bordered" placeholder="price" defaultValue={price}/>
                  </div>
                  <div className="form-control">
                      <input type="text" name="username" className="input input-bordered" placeholder="user name"  defaultValue={user?.displayName}  readOnly/>
                  </div>
                  <div className="form-control">
                      <input type="text" name="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly/>
                  </div>
                  <div className="form-control">
                      <input type="number" className="input input-bordered" placeholder="quantity" name="quantity"/>
                  </div>
                  <div className="form-control">
                      <input type="date" name="date" className="input input-bordered" />
                  </div>
              </div>
              <div className="form-control">
                <input type="text" name="image" className="input input-bordered mt-5" placeholder="PhotoUrl" defaultValue={food_image} readOnly/>
                </div>
              <div className="form-control mt-6">
                  <input className="btn bg-[#7DA640] text-white btn-block" type="submit" value="Purchase" />
              </div>
          </form>
          <div className="card-body">

          </div>
        </div>
  );
};

export default Purchase;