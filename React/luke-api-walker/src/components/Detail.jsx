import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Detail = () => {
    const { category, id } = useParams();
    let [info, setInfo] = useState({});
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response => {
            console.log("response from getting details", response);
            setInfo(response.data);
        })
        .catch(error => {console.log(error)})
    },[category, id]);

    return(
        <>
        {
            category === 'people'?
                <>
                <p>{info.name}</p>
                <p>height: {info.height} cm</p>
                <p>weight: {info.mass} kgs</p>
                <p>Birth Year: {info.birth_year}</p>
                </>
            : category === 'films'?
                <>
                <p>Title: {info.title}</p>
                <p>Producer(s): {info.producer}</p>
                <p>Director(s): {info.director}</p>
                </>
            : category === 'planets'?
                <>
                <p>Name: {info.name}</p>
                <p> Climate: {info.climate}</p>
                <p>Gravity: {info.gravity}</p>
                <p>Population: {info.population}</p>
                </>
            : category === 'species'?
                <>
                <p>Name: {info.name}</p>
                <p>Designation: {info.designation}</p>
                <p>classification: {info.classification}</p>
                <p>language: {info.language}</p>
                </>
            : category === 'starships'?
                <>
                <p>Name: {info.name}</p>
                <p>Model: {info.model}</p>
                <p>Length: {info.length}</p>
                <p>Crew size: {info.crew}</p>
                </>
            : category === 'vehicles'?
                <>
                    <p>vehicles is super broken sorry</p>
                </>
            : <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstar-wars-memes.fandom.com%2Fwiki%2FThese_Aren%2527t_The_Droids_You%2527re_Looking_For&psig=AOvVaw3BIN9SfBGDj2qhZZuskAOT&ust=1647909648863000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCZjPz71fYCFQAAAAAdAAAAABAD" alt="obiwan" />
        }
        </>
    );
};
export default Detail;