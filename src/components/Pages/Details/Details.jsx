import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  // const {id} = useParams();
  const loader = useLoaderData();
  const {_id,food_name,food_image,food_category,price,food_origin,description
  } = loader
 
  return (
    <div>
      <Helmet><title>Crave | Details</title></Helmet>
      <div className="card card-compact bg-[#7DA640] shadow-xl flex flex-row w-9/12 mx-auto my-20 rounded-xl">
        <figure><img className="w-full h-96 rounded-xl" src={food_image} alt="food" /></figure>
        <div className="card-body text-white">
          <h2 className="card-title font-bold text-3xl">{food_name}</h2>
          <p className="text-2xl font-semibold">{food_category}</p>
          <p className="text-xl">Origin: {food_origin}</p>
          <p className="text-lg font-semibold">Price: $ {price}</p>
          <p className="text-base">{description}</p>
          <div className="card-actions justify-start mt-3">
            <Link loader={loader} to={`/purchase/${_id}`}><button className="btn btn-white text-[#7DA640]">Order</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;