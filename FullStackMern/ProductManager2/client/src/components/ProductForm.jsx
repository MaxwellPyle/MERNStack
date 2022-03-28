import React, {useState} from 'react';
import axios from 'axios';


const ProductForm = () => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/products/create", formInfo)
            .then(response => {
                console.log("response: ", response.data.results)
            })
            .catch(error => {
                console.log("error: ", error)
            })
    }

    return(
        <>
        <div className="container">
            <form onSubmit={createProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className="form-control" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="form-control" value={description} onChange={(e) => {setDescription(e.target.value)}} />
                </div>
                <input type="submit" value="Submit!"/>
            </form>

        </div>
        </>
    );
};
export default ProductForm;