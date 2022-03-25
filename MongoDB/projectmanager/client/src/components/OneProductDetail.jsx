import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneProductDetail = () => {

    const {_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(() =>{
        axios.get(`http://localhost:8080/api/products/${_id}`)
            .then(res=>{
                console.log(res);
                setInfo(res.data.results);
            })
            .catch(err => {console.log(err)})
    },[_id])

    return(
        <>
            <h3>Details about {info.title}</h3>
            <p>{info.description}</p>
            <p>{info.price}</p>
        </>
    )
}
export default OneProductDetail;