import { useLoaderData } from "react-router-dom";
import useAxios from "../../Hooks/useAxiosSecure";

const Update = () => {
    const axios = useAxios()
    // const {id} = useParams()
    // console.log(id);
    const loader = useLoaderData();
    console.log(loader);


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

    // axios.patch('/update', userinfo)
    // .then(res =>{
    //     const data = res.data
    //     console.log(data);
    // })

}

  return (
    <div className="w-8/12 mx-auto my-20">
        <div>
        </div>
          <h2 className='text-center text-3xl mb-10'>Updates</h2>
          <form onSubmit={handleupdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                      <input type="text" name="name" className="input input-bordered" placeholder="food name" />
                  </div>
                  <div className="form-control">
                      <input type="number" name="price" className="input input-bordered" placeholder="price" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="username" className="input input-bordered" placeholder="user name" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="email" placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                      <input type="number" className="input input-bordered" placeholder="quantity" name="quantity"/>
                  </div>
                  <div className="form-control">
                      <input type="date" name="date" className="input input-bordered" />
                  </div>
              </div>
              <div className="form-control">
                <input type="text" name="image" className="input input-bordered mt-5" placeholder="PhotoUrl"/>
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