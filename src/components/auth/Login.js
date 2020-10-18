import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
   onSubmit = () => {};

   render() {
      return (
         <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
               <i className="fas fa-user"></i> Sign Into Your Account
            </p>
            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
               <div className="form-group"></div>
               <div className="form-group">
                  <input
                     type="email"
                     placeholder="Email Address"
                     name="email"
                     // value={email}
                     // onChange={(e) => onChange(e)}
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     minLength="6"
                     // value={password}
                     // onChange={(e) => onChange(e)}
                     required
                  />
               </div>

               <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
               Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
         </Fragment>
      );
   }
}

export default Login;
