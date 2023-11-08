import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxiosSecure";

const Update = () => {
    const axios = useAxios()
    const {id} = useParams()
    console.log(id);
    const loader = useLoaderData();
    const {name,email,price,username,quantity,date,image} = loader


const handleupdate = e =>{
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
    // console.log(userinfo);

    axios.patch(`/updateaddFood/${id}`, userinfo)
    .then(res =>{
        const data = res.data
        console.log(data);
        if(data.modifiedCount >0){
            Swal.fire({
              title: 'Success',
              text: 'update Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
    })

}

  return (
    <div className="w-8/12 mx-auto my-20">
        <Helmet><title>Crave | Update</title></Helmet>
          <h2 className='text-center text-3xl mb-10'>Updates</h2>
          <form onSubmit={handleupdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                      <input type="text" name="name" className="input input-bordered" placeholder="food name" defaultValue={name}/>
                  </div>
                  <div className="form-control">
                      <input type="number" name="price" className="input input-bordered" placeholder="price" defaultValue={price} readOnly/>
                  </div>
                  <div className="form-control">
                      <input type="text" name="username" className="input input-bordered" placeholder="user name"  defaultValue={username}/>
                  </div>
                  <div className="form-control">
                      <input type="text" name="email" placeholder="email" className="input input-bordered"  defaultValue={email}/>
                  </div>
                  <div className="form-control">
                      <input type="number" className="input input-bordered" placeholder="quantity" name="quantity"  defaultValue={quantity}/>
                  </div>
                  <div className="form-control">
                      <input type="date" name="date" className="input input-bordered" defaultValue={date}/>
                  </div>
              </div>
              <div className="form-control">
                <input type="text" name="image" className="input input-bordered mt-5" placeholder="PhotoUrl" defaultValue={image}/>
                </div>
              <div className="form-control mt-6">
                  <input className="btn bg-[#7DA640] text-white btn-block" type="submit" value="Update" />
              </div>
          </form>
          <div className="card-body">

          </div>
        </div>
  );
};

export default Update;