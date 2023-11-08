import loading from '../../../assets/image/loader.gif';

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;