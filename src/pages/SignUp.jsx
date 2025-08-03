import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {

    const { register, handleSubmit,} = useForm();
    const {createUser} = useContext(AuthContext);

    const onSubmit = data => {
      console.log(data);
      createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
    };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" {...register("name")} name="name" className="input" placeholder="Name"  />
              <label className="label">Email</label>
              <input type="email" {...register("email")} name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" {...register("password")} name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </fieldset>
            <p>Already a user? <span className="text-blue-600"><Link to="/login">LogIn</Link></span></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
