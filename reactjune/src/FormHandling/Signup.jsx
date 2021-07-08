import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: "", password: "", mobile: "" },
    };
  }
  inputHandler = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary">
                  <h3>Sign UP Form</h3>
                </div>
                <div className="card-body">
                  <pre>{JSON.stringify(this.state)}</pre>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        id="abc"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={this.inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile"
                        onChange={this.inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Signup"
                        className="btn btn-success"
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

export default Signup;
