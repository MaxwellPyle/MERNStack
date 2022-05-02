import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"

const PetForm = (props) => {
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");

    let [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const createPet = (e) => {
        e.preventDefault();
        let formInfo = {name, type, description, skill1, skill2, skill3}

        axios.post("http://localhost:8000/api/pets/create", formInfo)
            .then(response =>{
                console.log("response: ", response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors);
                }
                else{
                    // rerender the product list
                    props.setFormSubmitted(!props.formSubmitted);
    
                    // reset the form 
                    setName("");
                    setType("");
                    setDescription("");
                    setSkill1("");
                    setSkill2("");
                    setSkill3("");

                    //redirect back to form page
                    history.push("/");
                }
            })
    }
    return(
        <>
            <h2>Add a pet to our database!</h2>
        </>
    )
}
export default PetForm;