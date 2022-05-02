import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"

const PetForm = () => {
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");

    const history = useHistory();

    let [formErrors, setFormErrors] = useState({});

    const createPet = (e) => {
        e.preventDefault();
        let formInfo = {name, type, description, skill1, skill2, skill3}

        axios.post("http://localhost:8000/api/pets/create", formInfo)
            .then(response => {
                console.log("response: ", response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors);
                }
                else{
                    history.push("/");
                }
            })
            .catch(err => {console.log("error: ", err)})
    }

    return(
        <div className="container border border-dark">
            <form onSubmit={createPet}>
                <div className="d-flex">
                    <div className="col m-2">
                        <h4>Required: </h4>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                            <p className="text-danger">{formErrors.name?.message}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type: </label>
                            <input type="text" className="form-control" onChange={(e)=>{setType(e.target.value)}} value={type}/>
                            <p className="text-danger">{formErrors.type?.message}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description: </label>
                            <input type="text" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                            <p className="text-danger">{formErrors.description?.message}</p>
                        </div>
                    </div>
                    <div className="col m-2">
                        <h4>Optional: </h4>
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
            <input type="submit" value="Submit" className="btn btn-primary h-5 w-5"/>
            </form>
        </div>
    )
}
export default PetForm;