import React, { Component } from "react";
class Profile extends Component {
  state = {
    isLogin: true,
    message: "Hello",
  };
  loginHandler = () => {
    this.setState({ isLogin: false, message: "Welcome to PSA" });
  };
  logoutHandler = () => {
    this.setState({ isLogin: true, message: "Thank you visit Again" });
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Message:{this.state.message}</h4>
                </div>
                <div className="card-body">
                  {this.state.isLogin ? (
                    <button
                      className="btn btn-success mr-4"
                      onClick={this.loginHandler}
                    >
                      Login{" "}
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={this.logoutHandler}
                    >
                      Logout{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
