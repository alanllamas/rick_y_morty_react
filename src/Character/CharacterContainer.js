import React, { Component } from 'react'
import axios from 'axios';

import CharacterItem from './CharacterItem';



export default class CharacterContainer extends Component {

    state = {
        characters : []
    }

    componentDidMount(){
        this.getCharacters()
    }

    async getCharacters() {
        const res = await axios.get('https://rickandmortyapi.com/api/character/')
        
        this.setState({
            characters: res.data.results
        })

        
    }

    render() {

        return (
            <>
                {
                    this.state.characters.map(
                        char => <CharacterItem character={char} ></CharacterItem>
                    )
                }       
            </>
        )
    }
}
