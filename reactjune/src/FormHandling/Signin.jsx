import React, { Component } from "react";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };
  }
  userNameHandler = (event) => {
    console.log(this.state.name);
    this.setState({ name: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  displayData = (event) => {
    console.log(this.state);
    event.preventDefault(); //to avoid default html form behavior
    alert(JSON.stringify(this.state));
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3> Sign In</h3>
                  <pre>{JSON.stringify(this.state)}</pre>
                </div>
                <div className="card-body">
                  <form onSubmit={this.displayData}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="User Name"
                        onChange={this.userNameHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={this.passwordHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-success"
                        value="Sign In"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;
