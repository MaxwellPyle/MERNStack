import React, { useState } from 'react';
import axios from 'axios';


const ProductForm = () => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");


    const createProduct = (e) => {
        e.preventDefault();
        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/products/new", formInfo)
            .then(res => {
                console.log(res);
            })
            .catch(err=>{console.log("error: ", err)})
    }

    return(
        <>
            <form onSubmit={createProduct}>
                <div className="form-group">
                    <label htmlFor="">Title: </label>
                    <input type="text" name="" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value = {title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="text" name="" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value = {price} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description: </label>
                    <input type="text" name="" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value = {description} />
                </div>
                <input type="submit" value="Add Product"/>
            </form>
        </>
    );
}
export default ProductForm;