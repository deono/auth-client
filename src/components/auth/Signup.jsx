import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

export class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps);
  };
  render() {
    // method provided by redux-form
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="card col-10 col-sm-8 col-md-6 col-lg-4">
            <div className="card-body">
              <h3 className="card-title text-center">Sign Up</h3>
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
                {this.props.errorMessage !== "" && (
                  <div class="alert alert-danger" role="alert">
                    {this.props.errorMessage}
                  </div>
                )}
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary" type="submit">
                    Sign up
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

function mapStateTopProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(mapStateTopProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
