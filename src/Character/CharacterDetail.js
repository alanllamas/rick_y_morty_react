import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";


import  axios  from "axios";

const mapStateToProps = state => {
    // console.log('state: ', state);
    
    return {
        characters: state.characters,
        character: state.character
    }
}

const mapDispatchToProps = dispatch => {
    return {    
    };
}


class CharacterDetail extends Component {
    componentDidMount(){
        console.log('this.props.characters: ', this.props.characters);
        console.log('this.props.characters: ', !this.props.characters);
        console.log('this.props.characters: ', !!this.props.characters);
        
        console.log('this.props.characters: ', this.props.characters.results);
        console.log('this.props.characters: ', !this.props.characters.results);
        console.log('this.props.characters: ', !!this.props.characters.results);
        
        if(!this.props.characters.results){
            this.props.history.push('/')

        }
    }

    render() {
        const {image,name,status,gender,species,type,url} = this.props.character
    
        return (
            <>
                {
                    !!this.props.character ? 
                    (<div>
                        <img src={image} alt=""/>
                        <h4>{name}</h4>
                        <p>{status}</p>
                        <p>{gender}</p>
                        <p>{species}</p>
                        <p>{type}</p>
                        <a>{url}</a>

                    </div>) : ''
                }
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(CharacterDetail));
