import React, { Component } from 'react'
import axios from 'axios';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CharacterItem from './CharacterItem';
import { fetchCharactersAsync, setCharacterSuccess } from '../redux/actions';

const mapStateToProps = state => {
    // console.log('state: ', state);
    
    return {
        characters: state.characters.results,
        info: state.characters.info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCharactersAsync: bindActionCreators(fetchCharactersAsync, dispatch),
        setCharacterSuccess: bindActionCreators(setCharacterSuccess, dispatch)
    };
}

class CharacterContainer extends Component {

    componentDidMount(){
        this.props.fetchCharactersAsync()
        // setTimeout(() => {
        //     console.log('this.props: ', this.props);
            
        // }, 3000);
    }

    getCharacter(id){
        let char = this.props.characters.filter(char => char.id === id)[0]
        console.log(char);
        
        this.props.setCharacterSuccess(char)
        this.props.history.push(`/character/${id}`)
    }

    

    render() {
        console.log('loading en la 57');
        
        return (
            <>
                {
                    !!this.props.characters ? this.props.characters.map(
                        char => <CharacterItem getChar={() => this.getCharacter(char.id)} character={char} ></CharacterItem>
                    ) : ''
                }       
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterContainer);