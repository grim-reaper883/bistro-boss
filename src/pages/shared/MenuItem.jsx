

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({item}) => {
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
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
                style={{borderRadius:'0 200px 200px 200px'}} 
                className="w-20 h-20 md:w-24 md:h-24 object-cover flex-shrink-0" 
                src={image} 
                alt={name} 
            />
            <div className="flex-1 min-w-0">
                <h3 className="uppercase font-bold text-lg md:text-xl text-gray-800 mb-2">{name}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{recipe}</p>
            </div>
            <div className="flex flex-col items-end space-y-2">
                <p className="text-yellow-500 font-bold text-lg md:text-xl flex-shrink-0">${price}</p>
                <button 
                    onClick={handleAddToCart}
                    className="btn btn-sm btn-primary bg-yellow-500 hover:bg-yellow-600 border-0 text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MenuItem;