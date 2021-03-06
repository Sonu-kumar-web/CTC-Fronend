import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class OTP extends React.Component {
   state = { opt: "" };

   onSubmit = (e) => {
      e.preventDefault();
   };

   onChange = (e) => {
      // console.log("OnChange", e.target.value);
      this.setState({ opt: e.target.value });

      // console.log("true");
      localStorage.setItem("login", "12345");
   };

   onClick = () => {
      // setTimeout(() => {
      //    window.location.reload(false);
      // }, 10);
   };

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
                     placeholder="Enter your 10 digit OTP"
                     name="otp"
                     onChange={(e) => this.onChange(e)}
                     required
                     minLength="5"
                     maxLength="5"
                  />
               </div>
               {this.state.opt === "12345" ? (
                  <Link to="/job-post">
                     <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
                        onClick={() => this.onClick()}
                     />
                  </Link>
               ) : (
                  <Link to="/otp">
                     <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
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

export default OTP;
