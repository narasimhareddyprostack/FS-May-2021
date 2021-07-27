import React from 'react'
import {incrAction, decrAction} from '../redux/Product/product.action'
import {useDispatch, useSelector} from 'react-redux'

let Product = ()=>{
    /* let product = {
        name:"Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android ",
        price:15999,
        image:'https://rukminim1.flixcart.com/image/224/224/kq6yefk0/television/n/w/v/l32m5-al-mi-original-imag4967mvqvpvgp.jpeg?q=90',
        qty:1
    } */
    let product = useSelector((state)=>{ return state.product})
    //How to read redux store?
    let dispatch = useDispatch()
    let decrHandler = ()=>{
        //dispatch an action
        dispatch(decrAction())
    }
    let incrHandler = ()=>{
        dispatch(incrAction())
    }
    return <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-primary table-hover">
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>{product.name}</td>
                        <td><img src={product.image} height="80px" width="80px" alt="image" /></td>
                        <td>{product.price}</td>
                        <td> <i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty} <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                        <td>{product.qty * product.price}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
export default Product;

