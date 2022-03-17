import React, { useState } from 'react';

const PokemonComponent = () => {

    let [pokemonList, setPokemonList] = useState([]);

    const getPokemonList = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
            }).then(response => {
                console.log(response);
                setPokemonList(response);
            }).catch(err=>{
                console.log(err);
            
        }, []);
    }

        return(
            <>
                <button onClick = {getPokemonList} className="btn btn-dark m-2">Click here to get pokemon!</button>
                {
                    pokemonList.map((pokemon, i) => {
                        return <div key={i}>{pokemon.name}</div>
                    })
                }
            </>
        );
}
export default PokemonComponent;