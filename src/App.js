import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
export class App extends Component {
  // Declaring method
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
      <div>
        {/* Google Login component with props */}
        <GoogleLogin
          clientId='114180824441-q4m3lcfc9jmp41luageelrohnp9i1rgb.apps.googleusercontent.com'
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
