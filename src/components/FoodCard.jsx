import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <figure className="relative px-6 pt-6">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-48 md:h-56 object-cover"
        />
        <div className="absolute top-6 right-6">
          <p className="px-3 py-2 text-white rounded-full bg-slate-900 font-bold text-sm md:text-base">
            ${price}
          </p>
        </div>
      </figure>
      <div className="card-body items-center text-center p-6">
        <h2 className="card-title text-lg md:text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          {recipe}
        </p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary bg-yellow-500 hover:bg-yellow-600 border-0 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
