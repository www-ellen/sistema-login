import React, { Component } from "react";
import CSS from './Login.css';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMSG:''
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar() {
        let email = document.getElementById('email').values;
        let pass = document.getElementById('pass').values;

        fetch('https://alunos.b7web.com.br/apis/loginteste/users/login', {
            method:'POST',
            body:JSON.stringfy ({email, pass})
        })

        .then(r => json())
        .then(json => {

                this.setState({errorMSG:json.error});

                if (json.error == '' && json.jwt != '') {
                    localStorage.setItem('jwt', json.jwt);

                    this.props.history.push('/Home');
                }

            console.log(json)
        });
    }

    render() {
        return (
            <div class='login-area'>
                <h1> Login </h1>

                <p class="error"> {this.state.errorMSG} </p>

                <label>
                    Email:
                    <input type="email" id="email"/>
                </label>

                <label>
                    Senha:
                    <input type="password" id="pass"/>
                </label>

                <button onClick={this.entrar}> Entrar </button>
            </div>
        )
    }
}