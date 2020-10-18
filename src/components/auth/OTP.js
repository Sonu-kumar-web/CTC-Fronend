import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class OTP extends React.Component {
   onSubmit = (e) => {};

   // // Redirect if logged in
   // if (isAuthenticated) {
   //    return <Redirect to="/dashboard" />;
   // }

   render() {
      return (
         <Fragment>
            <h1 className="large text-primary">OTP Verification</h1>
            <p className="lead">
               <i className="fas fa-user"></i> Enter the 5 digit OTP ( Your
               dummy otp is 12345 )
            </p>
            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
               <div className="form-group">
                  <input
                     type="number"
                     placeholder="Enter your OTP digit OTP"
                     name="otp"
                     // value={name}
                     // onChange={(e) => onChange(e)}
                     required
                     minLength="5"
                     maxLength="5"
                  />
               </div>
               <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"
               />
            </form>
            <p className="my-1">
               Already have an account? <Link to="/login">Sign In</Link>
            </p>
         </Fragment>
      );
   }
}

export default OTP;
