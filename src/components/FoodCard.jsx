

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className=" absolute right-0 mr-4 mt-4 p-2 text-white rounded-xl bg-slate-900">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {recipe}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
