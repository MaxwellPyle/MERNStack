
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const EditProductForm = (props) => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");

    let {id} = useParams();
    const history = useHistory();

    


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log("response: ", response);
                setTitle(response.data.results.title);
                setPrice(response.data.results.price);
                setDescription(response.data.results.description);
            })
            .catch(error => {console.log("error: ", error)})
    },[id])
    

    const updateProduct = (e) => {
        e.preventDefault();
        

        axios.put(`http://localhost:8000/api/products/edit/${id}`, {
            title,
            price,
            description
        })
            .then(response =>{
                console.log("response: ", response)
                history.push("/")
            })
            .catch(error => {console.log("error: ", error)})
    }

    return(
        <>
            <div className="container">
            <h4>Editing: {title}</h4>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" className="form-control" onChange={(e) => {setTitle(e.target.value)}} value={title} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="text" className="form-control" onChange={(e) => {setPrice(e.target.value)}} value={price} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" className="form-control" onChange={(e) =>{setDescription(e.target.value)}} value={description} />
                </div>
                <input type="submit" className="btn btn-primary" value="Update"/>
            </form>


            </div>
        </>
    )

}
export default EditProductForm;