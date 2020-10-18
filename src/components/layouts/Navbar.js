import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

class Navbar extends React.Component {
   state = { isAuthenticated: false };

   onClick = (e) => {
      // window.location.reload(false);
   };

   onclickLogout = (e) => {
      localStorage.setItem("login", "");
      // window.location.reload(false);
   };

   authLinks = (
      <ul>
         <li>
            <Link to="/job-post">Job Posting</Link>
         </li>
         <li>
            <Link to="/job-seeker">
               <i className="fas fa-user"></i> <span>Job seeker</span>
            </Link>
         </li>
         <li>
            <Link to="/recruiter">
               <i className="fas fa-user"></i>{" "}
               <span className="hide-sm">Recruiter</span>
            </Link>
         </li>
         <li>
            <Popup
               trigger={<Link to="/job-seeker">Broadcast</Link>}
               position="up"
            >
               <div>
                  <div className="popup" style={{ marginTop: "400px" }}>
                     <h4 style={{ paddingLeft: "10px" }}>
                        There are 300 recruiters similar to your skills, would
                        you like to “ review” or “broadcast”
                     </h4>
                     <div className="popup-icon">
                        <Link
                           className="btn btn-primary my-1"
                           to="/job-seeker"
                           onClick={(e) => this.onClick(e)}
                        >
                           review
                        </Link>
                        <Link
                           className="btn btn-primary my-1"
                           to="/job-seeker"
                           onClick={(e) => this.onClick(e)}
                        >
                           broadcast
                        </Link>
                     </div>
                  </div>
               </div>
            </Popup>
         </li>
         <li>
            <Link to="/expert">Expert Support</Link>
         </li>
         <li>
            <a href="#!" onClick={(e) => this.onclickLogout(e)}>
               <i className="fas fa-sign-out-alt"></i>{" "}
               <span className="hide-sm">Logout</span>
            </a>
         </li>
      </ul>
   );

   guestLinks = (
      <ul>
         <li>
            <Link to="/register">Sign_up</Link>
         </li>
         <li>
            <Link to="/login">Sign_in</Link>
         </li>
         <li>
            <Link to="/job-post">Job Posting</Link>
         </li>
         <li>
            <Popup
               trigger={<Link to="/job-seeker">Broadcast</Link>}
               position="up"
            >
               <div>
                  <div className="popup" style={{ marginTop: "400px" }}>
                     <h4 style={{ paddingLeft: "10px" }}>
                        There are 300 recruiters similar to your skills, would
                        you like to “ review” or “broadcast”
                     </h4>
                     <div className="popup-icon">
                        <Link
                           className="btn btn-primary my-1"
                           to="/job-seeker"
                           onClick={(e) => this.onClick(e)}
                        >
                           review
                        </Link>
                        <Link
                           className="btn btn-primary my-1"
                           to="/job-seeker"
                           onClick={(e) => this.onClick(e)}
                        >
                           broadcast
                        </Link>
                     </div>
                  </div>
               </div>
            </Popup>
         </li>
         <li>
            <Link to="/expert">Expert Support</Link>
         </li>
      </ul>
   );

   render() {
      return (
         <nav className="navbar bg-dark">
            <h1>
               <Link to="/">
                  <i className="fas fa-code"></i> Naukri.com
               </Link>
            </h1>
            <div className="topnav">
               <input type="text" placeholder="Search..." />
               <input type="submit" value="Search" />
            </div>
            {
               <Fragment>
                  {localStorage.getItem("login") === "12345"
                     ? this.authLinks
                     : this.guestLinks}
               </Fragment>
            }
         </nav>
      );
   }
}

export default Navbar;
