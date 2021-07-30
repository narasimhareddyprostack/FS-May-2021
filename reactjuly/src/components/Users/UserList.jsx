import React from 'react'
import { fetchCustomersAction } from '../../redux/User/user.action'
import { useDispatch } from 'react-redux'
let UserList = () => {

    let dispatch = useDispatch();
    let getData = () => {
        // dispatch an action function 
        dispatch(fetchCustomersAction())

    }

    return <React.Fragment>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="btn btn-success" onClick={getData}>Get Data</div>
                    <table className="table table-dark bg-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>

                                <th>Email </th>
                                <th>City</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>

                </div>
            </div>
        </div>
    </React.Fragment>
}
export default UserList