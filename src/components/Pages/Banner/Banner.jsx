
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse w-11/12 justify-around my-10">
    <img src="https://i.ibb.co/2K3FtxF/home-img.png" className="max-w-sm rounded-lg w-5/6 md:w-full" />
    <div className="md:w-5/6 lg:w-3/6 my-10">
      <h1 className="text-4xl md:text-5xl font-bold text-[#7DA640]">Choosing The best Quality Food</h1>
      <p className="py-6 text-gray-600">Discover a world of quick and delicious delights at Crave. Indulge in our mouthwatering fast food classics that are ready to satisfy your hunger in minutes. Dig into your favorites today</p>
      <button className="btn bg-[#7DA640]  text-white ">Menus</button>
    </div>
  </div>
</div>
  );
};

export default Banner;