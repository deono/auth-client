import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

export class Signin extends Component {
  handleSubmit = formProps => {
    console.log(formProps);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="card col-10 col-sm-8 col-md-6 col-lg-4">
            <div className="card-body">
              <h3 className="card-title text-center">Sign In</h3>
              {/* Login form */}
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <Field
                    className="form-control"
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button class="btn btn-primary" type="submit">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ name: "signin" })(Signin);
