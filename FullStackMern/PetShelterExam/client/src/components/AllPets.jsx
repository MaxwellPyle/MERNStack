import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllPets = () => {
    let [petList, setPetList] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets")
            .then(response =>{
                console.log("response: ", response)
                setPetList(response.data.results)
            })
            .catch(error =>{
                console.log("error: ", error)
            })
    },[])

    
    return(
        <>
            <div className="container border border-dark">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            petList.map((pet)=>{
                                return(
                                    <tr key={pet._id}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td><Link to={`/edit/${pet._id}`} className="btn btn-primary m-2">Edit</Link>|| <Link to={`/details/${pet._id}`} className="btn btn-primary">Details</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AllPets;