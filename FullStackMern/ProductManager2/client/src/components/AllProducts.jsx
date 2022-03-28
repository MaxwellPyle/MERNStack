import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllProducts = () => {
    let [productList, setProductList] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:8000/api/products")
        .then(response => {
            console.log("response: ", response);
            setProductList(response.data.results);
        })
        .catch(error => {
            console.log("error: ", error);
        })
    },[])

    return(
        <>
            <h2>All Products!</h2>
            {
                productList.map((product) => {
                    return(
                        <div className="card" key={product._id}>
                            <div className="card-body">
                                <h3 className="card-title"><Link to={`/product/${product._id}`}>{product.title}</Link></h3>
                                <p className="card-text">
                                    price: ${product.price}
                                    <br />
                                    description: {product.description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};
export default AllProducts;