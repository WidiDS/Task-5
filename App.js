import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import './styles/App.css';

const App = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const res = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
            const pokemonData = await Promise.all(res.data.results.map(async (pokemon) => {
                const result = await Axios.get(pokemon.url);
                return {
                    id: result.data.id,
                    name: result.data.name,
                    image: result.data.sprites.front_default,
                };
            }));
            setPokemons(pokemonData);
        };

        fetchPokemons();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default App;
