import React, { useState, useEffect } from "react";
import Axios from "axios";
let ContactApp = () => {
  let [contact, setContact] = useState({
    contacts: [],
    selectedContact: {},
  });

  useEffect(() => {
    let dataUrl =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(dataUrl)
      .then((response) => {
        setContact({ ...contact, contacts: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {contact.contacts.length > 0 ? (
                  <React.Fragment>
                    {contact.contacts.map((contact) => {
                      return (
                        <tr key={contact.email}>
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
          <div className="col-md-4">
            {/*   {Object.keys(contact.selectedContact).length > 0 ? (
              <>
                <ContactCard contact={contact.selectedContact} />
              </>
            ) : null} */}
          </div>
        </div>
      </div>
      {/*  <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
    </React.Fragment>
  );
};

export default ContactApp;
