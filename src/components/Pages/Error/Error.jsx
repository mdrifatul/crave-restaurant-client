import { Link } from 'react-router-dom';
import error from '../../../assets/image/404.jpg';

const Error = () => {
  return (
    <div >
      <div className='h-64 w-2/3 mx-auto'><img src={error} alt="" /></div>
      <div className='text-center mt-20 w-fit mx-auto'>
      <Link to='/'><a className='btn btn-sm bg-[#7DA640] text-white'>Go back Home</a></Link>
      </div>
    </div>
  );
};

export default Error;