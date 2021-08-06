import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

class Subscription extends Component {

    state = {
        name: "",
        email: ""
      };
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

render(){
return (
    <MDBCol md="4">
      <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
        <p className="h5 text-center mb-4">Subscribe to our News Letter</p>
        <div className="grey-text">
          <MDBInput value={this.state.name.value} onChange={this.changeHandler} label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput value={this.state.email.value} onChange={this.changeHandler} label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="info" type="submit">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
);
}
};

export default Subscription;