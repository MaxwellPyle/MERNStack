import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllProducts = (props) => {
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
    },[props.formSubmitted])


    //delete method to delete straight from the homepage 
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(response => {
                console.log("response: ", response)
                let filteredList = productList.filter((product)=>{
                    return product._id != productId
                })
                setProductList(filteredList)
            })
            .catch(error => {console.log("error: ", error)})
    }
    
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
                                    <Link to={`/edit/${product._id}`} className="btn btn-primary m-2">Edit</Link>
                                    <button onClick={() =>{deleteProduct(product._id)}} className="btn btn-dark m-2">Delete</button>
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