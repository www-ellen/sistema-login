import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Config from '.Config';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Sobre } from '.pages/sobre';
import { Sair } from '.pages/sair';

class App extends Component {
    render() {
        <BrowserRouter basename={Config.BASE_URL}>
            <div>
                <Route exact path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/sair" component={Sair}/>
                <Route path="/sobre" component={Sobre}/>
            </div>
        </BrowserRouter>
    }
}