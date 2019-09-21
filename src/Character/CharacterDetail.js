import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import  axios  from "axios";



class CharacterDetail extends Component {
    state = {
        character : {},
        run :true
    }

    async getCharacter(){
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${this.id}`)

        this.setState({
            character: res.data
        })
    }
    wrapper ( ){
        if (this.state.run) {
            this.path = this.props.location.pathname;
            console.log(this.props.location);
            
            this.id = this.path.slice(this.path.indexOf('r/')+ 2, this.path.length);
            this.getCharacter();
            this.setState({run:false})
        }
    }
    
    render() {
        this.wrapper()
        return (
            <>
                {
                    !!this.state.character ? 
                    (<div>
                        <img src={this.state.character.image} alt=""/>
                        <h4>{this.state.character.name}</h4>
                        <p>{this.state.character.status}</p>
                        <p>{this.state.character.gender}</p>
                        <p>{this.state.character.species}</p>
                        <p>{this.state.character.type}</p>
                        <a>{this.state.character.url}</a>

                    </div>) : ''
                }
            </>
        )
    }
}
export default withRouter(CharacterDetail)
