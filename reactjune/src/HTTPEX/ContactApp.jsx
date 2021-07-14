import React from "react";
import Axios from "axios";
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: "",
    };
  }
  componentDidMount() {
    let dataURL =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";

    Axios.get(dataURL)
      .then((response) => {
        this.setState({
          contacts: response.data,
        });
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <h1>Contact App</h1>
        <pre>{JSON.stringify(this.state.contacts)}</pre>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts.length > 0 ? (
                    <React.Fragment>
                      {this.state.contacts.map((contact) => {
                        return (
                          <tr>
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>
                            <td>{contact.location.city}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ContactApp;
