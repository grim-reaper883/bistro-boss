import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useCart } from "../providers/CartProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const { createUser, user, updateUserProfile } = useContext(AuthContext);
  const { showErrorPopup } = useCart();
  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      const redirectPath = localStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        localStorage.removeItem('redirectAfterLogin');
        navigate(redirectPath);
      } else {
        navigate('/');
      }
    }
  }, [user, navigate]);

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name)
          .then(() => {
            const userInfo ={
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  navigate('/')
                }
              })

          })
      })
      .catch(error => {
        console.error(error);

        showErrorPopup("Failed to create account. Please try again.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-16 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto">
        <div className="text-center md:w-1/2 lg:text-left mb-8 lg:mb-0 lg:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sign Up now!</h1>
          <p className="py-6 text-base md:text-lg leading-relaxed">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-8">
            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label text-sm font-semibold">Name</label>
                <input type="text" {...register("name")} name="name" className="input input-bordered w-full" placeholder="Name" required />
              </div>
              <div>
                <label className="label text-sm font-semibold">Email</label>
                <input type="email" {...register("email")} name="email" className="input input-bordered w-full" placeholder="Email" required />
              </div>
              <div>
                <label className="label text-sm font-semibold">Password</label>
                <input type="password" {...register("password")} name="password" className="input input-bordered w-full" placeholder="Password" required />
              </div>

              <button className="btn btn-primary bg-yellow-500 hover:bg-yellow-600 border-0 w-full mt-6">Sign Up</button>
            </fieldset>
            
            <div className="text-center mt-6 space-y-4">
              <p className="text-sm">Already a user? <span className="text-blue-600 font-semibold"><Link to="/login">LogIn</Link></span></p>
              <SocialLogin/>
              <Link to="/" className="btn btn-outline btn-sm">Back to Home</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
