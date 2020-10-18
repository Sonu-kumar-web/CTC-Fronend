import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
   // onSubmit = (e) => {
   //    return <Redirect to="/otp" />;
   // };

   // // Redirect if logged in
   // if (isAuthenticated) {
   //    return <Redirect to="/dashboard" />;
   // }

   render() {
      return (
         <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
               <i className="fas fa-user"></i> Create Your Account
            </p>
            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
               <div className="form-group">
                  <input
                     type="number"
                     placeholder="Enter your 10 digit phone number"
                     name="phone"
                     required
                     minLength="10"
                     maxLength="10"
                  />
               </div>
               <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
               />
            </form>
            <p className="my-1">
               Already have an account? <Link to="/OTP">Sign In</Link>
            </p>
         </Fragment>
      );
   }
}

export default Register;
