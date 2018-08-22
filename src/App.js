import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      username: '',
      password: '',
      color: 'blue'
    }
  }

  // componentDidMount() {
  //   axios.get('/api/testSession').then(response => {
  //     console.log(response)
  //   })
  // }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  changeLogin() {
    this.setState({
      login: !this.state.login,
    })
  }

  handleClick() {
    !this.state.login ? this.handleRegister() : this.handleLogin();
  }

  handleLogin() {
    let stuff = {
      username: this.state.username,
      password: this.state.password,
    }

    axios.post('/api/login', stuff).then(response => {
      console.log(response);
    })
  }

  handleRegister() {
    let stuff = {
      username: this.state.username,
      password: this.state.password,
      color: 'blue'
    }

    axios.post('/api/register', stuff).then(response => {
      console.log(response);
    })
  }


  render() {
    let firstButton = this.state.login ? 'login' : 'register'

    return (
      <div className="App">
        <button onClick={() => this.changeLogin()}>{firstButton}</button>
        <input type="text" placeholder='username' name='username' onChange={(e) => this.handleChange(e)} />
        <input type="password" placeholder='password' name='password' onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.handleClick()}>{firstButton}</button>
      </div>
    );
  }
}

export default App;
