import { useContext,  } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useCart } from "../providers/CartProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const { showErrorPopup } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then((result) => {
      console.log(result.user);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.error(error);
      showErrorPopup("Invalid email or password. Please try again.");
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen py-16 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto">
        <div className="text-center md:w-1/2 lg:text-left mb-8 lg:mb-0 lg:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Login now!</h1>
          <p className="py-6 text-base md:text-lg leading-relaxed">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-xl">
          <form onSubmit={handleLogin} className="card-body p-8">
            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="label text-sm font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  required
                />
              </div>

              <input
                className="btn btn-primary bg-yellow-500 hover:bg-yellow-600 border-0 w-full mt-6"
                type="submit"
                value="Login"
              />
            </fieldset>
            <div className="text-center mt-6 space-y-4">
              <p className="text-sm">
                New Here?{" "}
                <span className="text-blue-600 font-semibold">
                  <Link to="/signup">Create an account</Link>
                </span>
              </p>
              <Link to="/" className="btn btn-outline btn-sm">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
