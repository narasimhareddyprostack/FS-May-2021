import React, { useState } from "react";
let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  //extract and copy - .... duty and update required property
  let emailHanlder = (event) => {
    setUser({ ...user, email: event.target.value });
  };
  let passwordHandler = (event) => {
    setUser({ ...user, password: event.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <p className="h4"> Login</p>
                <pre>{JSON.stringify(user)}</pre>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={emailHanlder}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="password"
                      onChange={passwordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="form-control btn btn-primary"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
