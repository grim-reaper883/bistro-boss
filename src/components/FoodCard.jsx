

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useCart } from "../providers/CartProvider";
import { useNavigate, useLocation } from "react-router-dom";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    const { user } = useContext(AuthContext);
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if (!user) {
            // Store the current location to redirect back after login
            localStorage.setItem('redirectAfterLogin', location.pathname);
            navigate('/login');
        } else {
            addToCart(item);
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
                    <p className="px-3 py-2 text-white rounded-full bg-slate-900 font-bold text-sm md:text-base">${price}</p>
                </div>
            </figure>
            <div className="card-body items-center text-center p-6">
                <h2 className="card-title text-lg md:text-xl font-bold mb-2">{name}</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                    {recipe}
                </p>
                <div className="card-actions">
                    <button 
                        onClick={handleAddToCart}
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
