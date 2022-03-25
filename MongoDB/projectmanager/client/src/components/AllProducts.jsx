import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllProducts = () => {
    const [productList, setProductList] = useState([]);

        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                setProductList(res.data.products);
            })
            .catch(err=>{console.log(err)})
    return(
        <>
                <h2>All of the products are listed below!</h2>
                <div className="container text-align-center">
                {
                    productList.map((product)=> {
                        return(
                            <div className="card" key={product._id}>
                                <h3><Link to={`/api/products/${product._id}`}>{product.title}</Link></h3>
                                <p>
                                    price: {product.price} 
                                </p>
                                <p>
                                    description: {product.description} 
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default AllProducts;