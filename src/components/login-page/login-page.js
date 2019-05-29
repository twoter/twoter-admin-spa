import React from 'react';
import { authService } from '../../services/auth-service';

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

    setTimeout(() => {
      this.setState({ loading: false });

      const userData = {
        username,
        name: 'zelivar'
      };

      authService.login(userData);
    }, 2000);
  }

  render() {
    const { username, password, loading, submitted } = this.state;

    return (
      <div>
        <div>LoginPage</div>

        <form onSubmit={this.submit}>
          <div>
            <div>Username</div>
            <div>
              <input type="text" name="username" value={username} onChange={this.change} disabled={loading} />
              {
                submitted && !this.isUsernameValid() &&
                <div>Invalid username</div>
              }
            </div>
          </div>
          <div>
            <div>Password</div>
            <div>
              <input type="password" name="password" value={password} onChange={this.change} disabled={loading} />
              {
                submitted && !this.isPasswordValid() &&
                <div>Invalid password</div>
              }
            </div>
          </div>
          <button disabled={loading}>login</button>
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
