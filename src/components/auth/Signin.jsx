import React, { Component } from "react";

export class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // dispatch action here
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="card col-10 col-sm-8 col-md-6 col-lg-4">
            <div className="card-body">
              <h3 className="card-title text-center">Sign In</h3>
              {/* Login form */}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button class="btn btn-primary" type="submit">
                    Submit
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

export default Signin;
