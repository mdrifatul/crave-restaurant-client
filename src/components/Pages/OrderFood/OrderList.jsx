import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxiosSecure";

const OrderList = ({order,setOrderFood,orderFood}) => {

  const {_id,name,price,date,image} = order
  const axios = useAxios();

  const handleDelete = (_id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.isConfirmed){
        console.log('confirm delete');
        axios.delete(`/order/${_id}`)
        .then(res => {
          const data = res.data
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your Coffee has been deleted.',
              'success'
            )
            const remaining = orderFood.filter(deleteCard => deleteCard._id !== _id);
            setOrderFood(remaining)
          }
          console.log(data);
        })
      }
    })
  }


  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-5 w-60">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">$ {price}</div>
          </div>
        </td>
        <td>
          <div className="font-bold">{date}</div>
        </td>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-error text-white btn-xs">delete</button>
        </th>
      </tr>
    </tbody> 
  </table>
</div>
      
    </div>
  );
};

export default OrderList;