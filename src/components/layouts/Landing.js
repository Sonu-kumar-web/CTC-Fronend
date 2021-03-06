import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
   // if (isAuthenticated) {
   //    return <Redirect to="/dashboard" />;
   // }

   render() {
      return (
         <section className="landing">
            <div className="dark-overlay">
               <div className="landing-inner">
                  <h1 className="x-large">Welcome to Corner Tree Consulting</h1>

                  <div className="buttons">
                     <Link to="/register" className="btn btn-primary">
                        Sign Up
                     </Link>
                     <Link to="/login" className="btn btn-light">
                        Login
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Landing;
