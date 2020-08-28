import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
export class App extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId=''
          buttonText=''
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}
export default App;
