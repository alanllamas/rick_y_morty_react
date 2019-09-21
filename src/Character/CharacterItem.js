import React from 'react';
import {Link} from 'react-router-dom';

const CharacterItem = ({character}) => {
    console.log(character);
    
    return (
        <Link to={`/character/${character.id}`} activeClassName="current">

            <div>
                <img src={character.image} alt=""/>
                <h4>{character.name}</h4>
                <p>{character.status}</p>
                <p>{character.gender}</p>
                <p>{character.origin.name}</p>
            </div>
        </Link>
    );
}

export default CharacterItem;
