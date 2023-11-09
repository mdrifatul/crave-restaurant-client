import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxiosSecure";
import useAuth from './../../Hooks/useAuth';

const Addfood = () => {
  const axios = useAxios();
  const {user} = useAuth();

  const handleAddfood = e =>{
    e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get("name")
      const category = form.get("category")
      const price = form.get("price")
      const email = form.get("email")
      const origin = form.get("origin");
      const quantity = form.get("quantity");
      const image = form.get("image")
      const description = form.get("description")
      const userinfo = {
      name,price, email, quantity,category, image,description,origin 
      }

      axios.post('/addFood', userinfo)
      .then(res => {
         console.log(res.data);
         Swal.fire({
            title: 'Success',
            text: 'Add Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      })
      
  }


  return (
    <div className="w-8/12 mx-auto my-20">
        <Helmet><title>Crave | Add Food</title></Helmet>
          <form onSubmit={handleAddfood} >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                      <input type="text" name="name" className="input input-bordered" placeholder="food name" required/>
                  </div>
                  <div className="form-control">
                      <input type="text" name="category" className="input input-bordered" placeholder="category" required/>
                  </div>
                  <div className="form-control">
                      <input type="text" name="image" className="input input-bordered" placeholder="imageURL" required/>
                  </div>
                  <div className="form-control">
                      <input type="number" name="price" className="input input-bordered" placeholder="price" required/>
                  </div>
                  <div className="form-control">
                      <input type="email" name="email" className="input input-bordered" placeholder="Email" defaultValue={user?.email} readOnly/>
                  </div>
                  <div className="form-control">
                      <input type="number" name="quantity" className="input input-bordered" placeholder="quantity" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="origin" className="input input-bordered" placeholder="origin"/>
                  </div>
                  <div className="form-control">
                      <input type="textarea" name="description" className="input input-bordered" placeholder="description"/>
                  </div>
              </div>
              <div className="form-control mt-6">
                  <input className="btn bg-[#7DA640] text-white btn-block" type="submit" value="Add" />
              </div>
          </form>
          <div className="card-body">

          </div>
        </div>
  );
};

export default Addfood;