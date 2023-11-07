import { Link } from "react-router-dom";

const Food = ({item}) => {
  const {_id,food_name, food_image, food_category, price, quantity} = item;
  return (
    <div>
      <div className="card card-compact bg-white shadow-xl rounded-xl">
        <figure><img src={food_image} alt="food" className="h-52 w-full"/></figure>
        <div className="card-body text-[#7DA640] rounded-b-xl">
          <h2 className="card-title font-bold text-2xl">{food_name}</h2>
          <p className="text-xl font-semibold">{food_category}</p>
          <div className="flex">
          <p className="text-lg font-semibold">$ {price}</p>
          </div>
          <div className="card-actions justify-center mt-3">
            <Link to={`/details/${_id}`}>
            <button className="btn btn-sm bg-[#7DA640] text-white">Details</button>
            </Link>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Food;