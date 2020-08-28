import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
export class App extends Component {
  // Declaring method
  responseGoogle = (response) => {
    // For testing
    console.log(response);
    // Console log porfile data such as profile name, image, id, etc.
    console.log(response.profileObj);
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId='114180824441-vd91frvs2v6grqfgbienho93fkocakgs.apps.googleusercontent.com'
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
