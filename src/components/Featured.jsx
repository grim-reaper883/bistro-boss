import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <div>
      <SectionTitle subHeading={"Check it out"} heading={"Featured Items"} />
      <div className="md:flex justify-center items-center py-8 px-16 space-x-8 bg-[url('/src/assets/home/featured.jpg')]  text-black">
        <div>
          <img src="/src/assets/home/featured.jpg" alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            maxime ipsum. Atque repellat reiciendis neque magnam hic ducimus
            dolorum. Maiores, aperiam? Deserunt quibusdam officia, accusantium
            eos doloremque minus qui obcaecati!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;