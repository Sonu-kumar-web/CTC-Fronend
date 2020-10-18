import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

export default class JobPost extends Component {
   onSubmit() {}

   render() {
      return (
         <Fragment>
            <h1 className="large text-primary">Post a Job</h1>
            <p className="lead"></p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
               <div className="form-group">
                  <select
                     name="status"
                     //  value={status}
                     //  onChange={(e) => onChange(e)}
                     required
                  >
                     <option value="0">* Job Role</option>
                     <option value="Developer">Developer</option>
                     <option value="Junior Developer">Junior Developer</option>
                     <option value="Senior Developer">Senior Developer</option>
                     <option value="Manager">Manager</option>

                     <option value="Intern">Intern</option>
                     <option value="Other">Other</option>
                  </select>
               </div>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Company"
                     name="company"
                     //  value={company}
                     //  onChange={(e) => onChange(e)}
                  />
               </div>

               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Location"
                     name="location"
                     //  value={location}
                     //  onChange={(e) => onChange(e)}
                  />
               </div>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="* Skills"
                     name="skills"
                     //  value={skills}
                     //  onChange={(e) => onChange(e)}
                     required
                  />
                  <small className="form-text">
                     Please use comma separated values (eg.
                     HTML,CSS,JavaScript,PHP)
                  </small>
               </div>

               <div className="form-group">
                  <textarea
                     placeholder="Job Description"
                     name="bio"
                     //  value={bio}
                     //  onChange={(e) => onChange(e)}
                  ></textarea>
                  <small className="form-text">Job Description (JD)</small>
               </div>

               <Popup
                  trigger={
                     <input type="submit" className="btn btn-primary my-1" />
                  }
                  position="right center"
               >
                  <div>
                     <div className="popup">
                        <h4>
                           would you like this posting to go on Social media !!
                        </h4>
                        <div className="popup-icon">
                           <i className="fab fa-twitter fa-2x"></i>
                           <i className="fab fa-facebook fa-2x"></i>
                           <i className="fab fa-youtube fa-2x"></i>
                           <i className="fab fa-linkedin fa-2x"></i>
                           <i className="fab fa-instagram fa-2x"></i>
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
