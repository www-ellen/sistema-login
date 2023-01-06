import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        let jwt = localStorage.getItem('jwt');
        if (this.state.jwt == '' || typeof thus.state.jwt == 'undefined') {
            this.props.history.push('/Login');
        }
    }

    render() {
        return (
            <div>
                Página Home...
                <br/>

                JWT: {this.state.jwt}
                <br/>

                <Link to="/sair"> Sair </Link>

                <Link to="/sobre"> Ir para a página Sobre </Link>
            </div>
        )
    }

}