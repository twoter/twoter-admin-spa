import React from 'react';
import { authService } from '../../services/auth-service';
import userService from '../../services/userService';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loading: false,
      submitted: false
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.isUsernameValid = this.isUsernameValid.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
  }

  change(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  submit(e) {
    const { username, password } = this.state;
    e.preventDefault();

    this.setState({ submitted: true });

    if ('' === username.trim() || '' === password.trim()) {
      return;
    }

    this.setState({ loading: true });

    userService.login(username, password)
      .then(() => {
        this.setState({ loading: false });

        const userData = {
          username
        };

        authService.login(userData);
        this.props.history.push('/');
      });
  }

  render() {
    const { username, password, loading, submitted } = this.state;

    return (
      <div className="login-cont">
        <h2>LoginPage</h2>

        <form onSubmit={this.submit}>
          <div className="item">
            <label for="username">Username</label>
            <input id="username" type="text" name="username" value={username} onChange={this.change} disabled={loading} />
            {
              submitted && !this.isUsernameValid() &&
              <div>Invalid username</div>
            }
          </div>
          <div className="item">
            <label for="password">Password</label>
            <input id="password" type="password" name="password" value={password} onChange={this.change} disabled={loading} />
            {
              submitted && !this.isPasswordValid() &&
              <div>Invalid password</div>
            }
          </div>
          <div className="item">
            <button disabled={loading}>login</button>
          </div>
        </form>
      </div>
    );
  }

  isUsernameValid() {
    const { username } = this.state;

    return '' !== username.trim();
  }

  isPasswordValid() {
    const { password } = this.state;

    return '' !== password.trim();
  }

}

export default LoginPage;
