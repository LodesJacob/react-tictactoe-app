import React from 'react';

class Login extends React.Component {
    handleClick() {
        console.log('User is logging in');
        console.log(this.refs.username.value)
        console.log(this.refs.password.value)

        var username = this.refs.username.value
        var password = this.refs.password.value


        for (const user of this.props.users) {
            if (username === user.username && password === user.password) {
                this.props.loginUser()
                return
            }
        }

        alert('Username or password is incorrect')
        
    }
    render() {
        return (
            <form id="login">
                <legend><h1>Login</h1></legend>
                <input type="text" placeholder="Username" ref="username"/>
                <input type="password" placeholder="Password" ref="password"/>
                <input type="button" className="button" value="Login" onClick={() => this.handleClick()}/>
            </form>
          );
    }
  
}

export default Login;
