import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"

const ProductForm = (props) => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");

    const history = useHistory();

    //error form fields
    let [formErrors, setFormErrors] = useState({});

    const createProduct = (e) => {
        e.preventDefault();
        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/products/create", formInfo)
            .then(response => {
                console.log("response: ", response);
                if(response.data.err){
                    setFormErrors(response.data.err.errors);
                }
                else{
                    // rerender the product list
                    props.setFormSubmitted(!props.formSubmitted);
    
                    // reset the form 
                    setTitle("");
                    setPrice(0);
                    setDescription("");

                    //redirect back to form page
                    history.push("/");
                }
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
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className="form-control" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                    <p className="text-danger">{formErrors.price?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="form-control" value={description} onChange={(e) => {setDescription(e.target.value)}} />
                    <p className="text-danger">{formErrors.description?.message}</p>

                </div>
                <input type="submit" value="Submit!"/>
            </form>

        </div>
        </>
    );
};
export default ProductForm;