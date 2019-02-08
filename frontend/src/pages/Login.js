import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

// import styles from './styles';

export default class Login extends Component {
    state = {
        username: ""
    };

    handleSugmit = e => {
        e.preventDefault();

        const { username } = this.state;

        if(!username.length) return;

        localStorage.setItem("@GoTwitter:username", username);

        this.props.history.push("/timeline");
    }

    handleInputChange = e => {
        this.setState({ username: e.target.value });
    };

    render() {
        return(
        <div className="login-wrapper">
            <img src={twitterLogo} alt="GoTwitter" />
            <form onSubmit={this.handleSugmit}>
                <input 
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Nome de usuário" />
                <button type="Submit">Entrar</button>
            </form>
        </div>
        ); 
    }
}

