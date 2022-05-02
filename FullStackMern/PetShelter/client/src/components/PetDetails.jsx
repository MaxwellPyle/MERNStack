import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const PetDetails = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                console.log("response: ", response)
                setInfo(response.data.results)
            })
            .catch(err =>{console.log("error: ", err)})
    },[id])

    const deletePet = (e) => {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(response => {
                console.log("response: ", response)
                history.push("/")
            })
            .catch(err =>{console.log("error: ", err)})
    }
    
    return(
        <>
            <div className="container border border-dark">
                <h4>Details about: {info.name}</h4>
                <button onClick={deletePet} className="btn btn-success">Adopt {info.name}!</button>
                <div className="d-flex">
                    <div className="col">
                        <p>Name: {info.name}</p>
                        <p>Type: {info.type}</p>
                        <p>Description: {info.description}</p>
                    </div>
                    <div className="col">
                        <p>Skill 1: {info.skill1}</p>
                        <p>Skill 2: {info.skill2}</p>
                        <p>Skill 3: {info.skill3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PetDetails;