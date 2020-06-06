import APIexterne from "../../utils/APIexterne";
import React from 'react';

export class Pokemon extends React.Component {
    state = {
        pokemons: []
    }
    async getPokemons() {
        let fullListPokemons = await APIexterne.get('/');
        return fullListPokemons.data.results;
    }
    async componentDidMount() {
        let pokemons = await this.getPokemons();
        this.setState({ pokemons: pokemons });
    }
    render() {
        return (
            <ul>
                { this.state.pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
            </ul>
        )
    }
}
export default Pokemon;
