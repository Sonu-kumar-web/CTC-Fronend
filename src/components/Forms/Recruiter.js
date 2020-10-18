import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

export default class Recruiter extends Component {
   onClick = () => {
      window.location.reload(false);
   };

   onSubmit() {}
   render() {
      return (
         <Fragment>
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className="lead">
               <i className="fas fa-user"></i> Let's get some information
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     //   value={name}
                     //   onChange={(e) => onChange(e)}
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="email"
                     placeholder="Email Address"
                     name="email"
                     //   value={email}
                     //   onChange={(e) => onChange(e)}
                     required
                  />
               </div>

               <div className="form-group">
                  <input
                     type="number"
                     placeholder="Enter your 10 digit phone number"
                     name="phone"
                     // value={name}
                     // onChange={(e) => onChange(e)}
                     required
                     minLength="10"
                     maxLength="10"
                  />
               </div>

               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Company"
                     name="company"
                     // value={company}
                     // onChange={(e) => onChange(e)}
                  />
                  <small className="form-text">
                     Could be your own company or one you work for
                  </small>
               </div>

               <div className="form-group">
                  <select
                     name="status"
                     //  value={status}
                     //  onChange={(e) => onChange(e)}
                     required
                  >
                     <option value="0">* Select your Role</option>
                     <option value="Developer">Developer</option>
                     <option value="Junior Developer">Junior Developer</option>
                     <option value="Senior Developer">Senior Developer</option>
                     <option value="Manager">Manager</option>
                     <option value="Student or Learning">
                        Student or Learning
                     </option>
                     <option value="Intern">Intern</option>
                     <option value="Other">Other</option>
                  </select>
                  <small className="form-text">
                     For which role you mostly hire
                  </small>
               </div>

               <div className="form-group">
                  <select
                     name="status"
                     //  value={status}
                     //  onChange={(e) => onChange(e)}
                     required
                  >
                     <option value="0">* Select your job location</option>
                     <option value="Bangalore">Bangalore</option>
                     <option value="Delhi">Delhi</option>
                     <option value="Pune">Pune</option>
                     <option value="Manager">Manager</option>

                     <option value="Other">Other</option>
                  </select>
                  <small className="form-text">
                     which location/city are you looking for a job role
                  </small>
               </div>

               <div className="form-group">
                  <label>
                     <h4 style={{ display: "inline" }}>
                        Blue collar workforce:
                     </h4>
                  </label>
                  <input
                     style={{ marginLeft: "10px" }}
                     type="radio"
                     placeholder="Company"
                     name="company"
                     // value="Yes"
                     //  onChange={(e) => onChange(e)}
                  />
                  <label style={{ marginLeft: "5px" }}>Yes</label>

                  <input
                     style={{ marginLeft: "20px" }}
                     type="radio"
                     placeholder="Company"
                     name="company"
                     // value="Yes"
                     //  onChange={(e) => onChange(e)}
                  />
                  <label style={{ marginLeft: "5px" }}>No</label>
               </div>

               <input type="submit" className="btn btn-primary my-1" />

               <Popup
                  trigger={
                     <input
                        style={{ height: "37px" }}
                        type="button"
                        className="btn btn-primary my-1 abs"
                        value="Broadcast"
                     />
                  }
                  position="right center"
               >
                  <div>
                     <div className="popup">
                        <h4 style={{ paddingLeft: "10px" }}>
                           recommended a “job posting” for better reach, click
                           to “post a job”.
                        </h4>
                        <div className="popup-icon">
                           <Link
                              className="btn btn-primary my-1"
                              to="/job-post"
                              onClick={(e) => this.onClick(e)}
                           >
                              Post a Job
                           </Link>
                        </div>
                     </div>
                  </div>
               </Popup>

               <Link className="btn btn-light my-1" to="/dashboard">
                  Go Back
               </Link>
            </form>
         </Fragment>
      );
   }
}
