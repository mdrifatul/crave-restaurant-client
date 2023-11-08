import { BsFillSendFill } from "react-icons/bs";

const Inform = () => {
  return (
    <>
    <div data-aos="zoom-in-up" data-aos-duration="500" className="hero" style={{backgroundImage: 'url(https://i.ibb.co/JxBQ1zj/jay-wennington-N-Y88-TWm-Gw-A-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content py-20">
    <div className="w-8/12">
      <h1 className="mb-5 text-5xl font-bold">Stay Informed About Special Offers</h1>
      <p className="mb-5 font-bold">For Exclusive Deals, Coupons, News and More!</p>
      <div className="w-10/12 join mt-10 flex justify-center mx-auto">
        <input className="input input-bordered join-item w-full" placeholder="Enter Your Email"/>
        <button className="btn join-item bg-[#7DA640] text-white w-16"><BsFillSendFill></BsFillSendFill></button>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default Inform;