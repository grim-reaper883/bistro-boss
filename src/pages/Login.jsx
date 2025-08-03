import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {

  const {signIn} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
          })
          .catch(error => {
            console.error(error);
          });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <input className="btn btn-neutral mt-4" type="submit" value="Login" />
        </fieldset>
        <p>New Here? <span className="text-blue-600"><Link to="/signup">Create an account</Link></span></p>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;