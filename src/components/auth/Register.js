import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
   state = { len: "" };
   onChange = (e) => {
      // console.log("ON", e.target.value.length);
      this.setState({ len: e.target.value });
   };

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
                     onChange={(e) => this.onChange(e)}
                  />
               </div>
               {this.state.len.length === 10 ? (
                  <Link to="/OTP">
                     <input
                        type="button"
                        className="btn btn-primary"
                        value="Register"
                     />
                  </Link>
               ) : (
                  <Link to="/register">
                     <input
                        type="button"
                        className="btn btn-primary"
                        value="Register"
                     />
                  </Link>
               )}
            </form>
            <p className="my-1">
               Already have an account? <Link to="/login">Sign In</Link>
            </p>
         </Fragment>
      );
   }
}

export default Register;
