import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CharacterContainer from './Character/CharacterContainer';
import CharacterDetail from './Character/CharacterDetail';

const Example = () => <h1>Example Works!</h1>
const NotFound = () => <h1>404</h1>

export default () => {
   return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CharacterContainer} />
                <Route exact path="/character/:id" component={CharacterDetail} />
                <Route path="/example" component={Example} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}