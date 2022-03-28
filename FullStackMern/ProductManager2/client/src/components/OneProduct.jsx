import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

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

    return(
        <>
            <div className="container">
                <h4>Details about: {info.title}</h4>
                <p>
                    price: ${info.price}
                    <br />
                    description: {info.description}
                </p>
            </div>
        </>
    );

}
export default OneProduct;