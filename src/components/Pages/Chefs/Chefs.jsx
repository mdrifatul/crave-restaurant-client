
const Chefs = () => {
  return (
    <div className="w-9/12 md:w-9/12 lg:w-10/12 mx-auto my-24">
      <h1 className="text-6xl mb-20 text-center text-[#7DA640] font-bold italic">Master Chefs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10">
      <div className="card card-compact bg-base-100 shadow-xl h-96">
  <figure><img src="https://i.ibb.co/k3mfV67/febrian-zakaria-Si-Qgni-cq-Fg-unsplash.jpg" className="h-96 w-full" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">John Smith</h2>
    <p className="text-[#7DA640] text-base">Executive Chef</p>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl h-96">
  <figure><img src="https://i.ibb.co/1TpQNNt/petr-sevcovic-e5-Q5v-WO55u-U-unsplash.jpg" className="h-80 w-full" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">Maria Rodriguez</h2>
    <p className="text-[#7DA640] text-base">Sous Chef</p>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl h-96">
  <figure><img src="https://i.ibb.co/SdNx99t/bluebird-provisions-l-RAWc-T7uwh-Y-unsplash.jpg" className="h-80 w-full" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">David Kim</h2>
    <p className="text-[#7DA640] text-base">Pastry Chef</p>
  </div>
</div>
    </div>
    </div>
  );
};

export default Chefs;