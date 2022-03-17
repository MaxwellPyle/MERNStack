import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PokemonApiComponent = () => {
let [pokemonList, setPokemonList] = useState(null);

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response=>{
            setPokemonList(response.results)

        })
    },[]);

    return (
        <>
            {pokemonList.name}
        </>
        );
    }

export default PokemonApiComponent;