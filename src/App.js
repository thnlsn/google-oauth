import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
export class App extends Component {
  render() {
    // Declaring method
    responseGoogle = (response) => {
      // For testing
      console.log(response);
      // Console log porfile data such as profile name, image, id, etc.
      console.log(response.profileObj);
    };
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
