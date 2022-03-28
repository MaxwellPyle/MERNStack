import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const OneProduct = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response =>{
                console.log("response: ", response);
                setInfo(response.data.results);
            })
            .catch(error =>{console.log("error: ", error)})
    },[id])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(response=>{
                console.log("response: ", response)
                history.push("/")
            })
            .catch(error =>{console.log("error: ", error)})
    }
    return(
        <>
            <div className="container">
                <h4>Details about: {info.title}</h4>
                <p>
                    price: ${info.price}
                    <br />
                    description: {info.description}
                    <Link to={`/edit/${id}`}>Edit</Link>
                    <button onClick={() =>{deleteProduct()}} className="btn btn-dark m-2">Delete</button>
                </p>
            </div>
        </>
    );

}
export default OneProduct;