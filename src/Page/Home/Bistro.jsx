import bgImg from '../../assets/home/chef-service.jpg'
const Bistro = () => {
    return (
<div
  className="hero max-h-screen mb-10"
  style={{
    backgroundImage: `url(${bgImg})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md bg-white text-black">
      <h1 className="mb-5 text-3xl font-bold">Bistro Boss</h1>
      <p className="mb-5 text-gray-500">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      
    </div>
  </div>
</div>
    );
};

export default Bistro;