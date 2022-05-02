import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditPet = () =>{
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");

    let {id} = useParams();

    const history = useHistory();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response =>{
                console.log("response: ", response);
                setName(response.data.results.name);
                setType(response.data.results.type);
                setDescription(response.data.results.description);
                setSkill1(response.data.results.skill1);
                setSkill2(response.data.results.skill2);
                setSkill3(response.data.results.skill3);
            })
            .catch(err =>{
                console.log("error: ", err)
            })
    }, [id])

    const updatePet = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/edit/${id}`, {
            name,
            type, 
            description,
            skill1,
            skill2,
            skill3
        })
            .then(response =>{
                console.log("response:", response)
                history.push("/")
            })
            .catch(err =>{console.log("error: ", err)})
    }
    return(
        <>
            <div className="container">
                <h3>Editing: {name}</h3>
                <form onSubmit={updatePet}>
                    <div className="d-flex">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input type="text" className="form-control" onChange={(e) =>{setName(e.target.value)}} value={name}/>
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="type">Type: </label>
                                <input type="text" className="form-control" onChange={(e)=>{setType(e.target.value)}} value={type}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description: </label>
                                <input type="text" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                            </div>
                        </div>
                        <div className="col m-2">
                            <div className="form-group">
                                <label htmlFor="skill1">Skill 1: </label>
                                <input type="text" className="form-control" onChange={(e)=>{setSkill1(e.target.value)}} value={skill1}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="skill2">Skill 2: </label>
                                <input type="text" className="form-control" onChange={(e)=>{setSkill2(e.target.value)}} value={skill2}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="skill3">Skill 3: </label>
                                <input type="text" className="form-control" onChange={(e)=>{setSkill3(e.target.value)}} value={skill3}/>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary m-2"/>
                </form>
            </div>
        </>
    )
}
export default EditPet;