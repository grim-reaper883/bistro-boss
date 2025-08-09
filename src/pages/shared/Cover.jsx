const Cover = ({ img, title }) => {
  return (
    <div
      className="hero h-[500px] md:h-[600px] lg:h-[700px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center px-4">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            {title}
          </h1>
          <p className="mb-8 text-sm md:text-base leading-relaxed">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-yellow-500 hover:bg-yellow-600 border-0 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
