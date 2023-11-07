import { Link } from "react-router-dom";

const AddedFoodCard = ({food}) => {
  const {_id,name,price,category,image} = food
  return (
    <div className="card card-compact bg-white shadow-xl rounded-xl">
    <figure><img src={image} alt="food" /></figure>
    <div className="card-body text-[#7DA640] rounded-b-xl">
      <h2 className="card-title font-bold text-2xl capitalize">{name}</h2>
      <p className="text-xl font-semibold">{category}</p>
      <div className="flex">
      <p className="text-lg font-semibold">Price: $ {price}</p>
      </div>
      <div className="card-actions justify-center mt-3">
        <Link to={`/update/${_id}`}>
        <button className="btn btn-sm bg-[#7DA640] text-white">update</button>
        </Link>
      </div>
    </div>
</div>
  );
};

export default AddedFoodCard;