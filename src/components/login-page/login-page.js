import React from 'react';
import { authService } from '../../services/auth-service';
import userService from '../../services/userService';
import adminUserService from '../../services/adminUserService';

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

    adminUserService.login(username, password)
      .then(({ logged }) => {
        this.setState({ loading: false });
        if (!logged) {
          this.setState({ error: 'Invalid username or password.' });

          return;
        }

        userService.login(username, password)
          .then(() => {
            const userData = {
              username
            };

            authService.login(userData);
            this.props.history.push('/');
          });
      });
  }

  render() {
    const { username, password, loading, submitted, error } = this.state;

    return (
      <div className="login-cont">
        <h2>LoginPage</h2>

        <form onSubmit={this.submit}>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" value={username} onChange={this.change} disabled={loading} />
            {
              submitted && !this.isUsernameValid() &&
              <div className="error">Invalid username</div>
            }
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={password} onChange={this.change} disabled={loading} />
            {
              submitted && !this.isPasswordValid() &&
              <div className="error">Invalid password</div>
            }
          </div>
          {
            error ? (<div className="item"><div className="error">{error}</div></div>) : ''
          }
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
