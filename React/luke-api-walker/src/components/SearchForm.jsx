import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const SearchForm = () => {
    let [categories, setCategories] = useState([])
    let [selectedCategory, setSelectedCategory] = useState("")
    let [id, setId] = useState(null)
    const history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(response => {
            console.log(Object.keys(response.data));
            setCategories(Object.keys(response.data))
            setSelectedCategory(Object.keys(response.data)[0])
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log("submitted!")
        history.push(`/${selectedCategory}/${id}`)
    }

    return(
        <>
            <form className="container d-flex justify-content-around" onSubmit = {handleSearch}>
                <div className="form-group w-50 m-2 d-flex">
                    <label htmlFor="">search:</label>
                    <select name="" className="form-select" onChange = {(e)=>{setSelectedCategory(e.target.value)}}>
                        {
                            categories.map((cat,i)=>{
                                return(
                                    <option value={cat} key={i}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group w-25 m-2 d-flex">
                    <label htmlFor="">id:</label>
                    <input type="text" className="form-control" onChange = {(e)=>{setId(e.target.value)}}/>
                </div>
                <input type="submit" value="Search" className="btn btn-primary h-25"/>
            </form>
        </>
    );
};
export default SearchForm;