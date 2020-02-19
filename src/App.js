import React from 'react';
import './App.css';
import TicTacToe from './components/tictactoe/index.js'
import Login from './components/login/index.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login:false,
      users: [
        {
          username: 'test',
          password: 'test'
        }
      ]
    }
  }
  loginUser( state ) {
    this.setState({login:true})
  }
  logoutUser( state ) {
    this.setState({login:false})
  }
  render() {
    return (
      <div>
        {
        (this.state.login) ? 
        <TicTacToe logoutUser={() => this.logoutUser()}/> :
        <Login loginUser={() => this.loginUser()} users={this.state.users}/>
        }
      </div>
    )
  }
}

export default App;
