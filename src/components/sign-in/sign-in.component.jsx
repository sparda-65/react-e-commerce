import React, { Component } from "react";
import '../form-input/form-input.component.jsx'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "", 
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  render() {
    return (
      <div className="signin">
        <h1>I already have an account</h1>
        <span>Sign in with your e-mail and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
          />
          
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            required
          />
        <div className="buttons">
          <CustomButton type="submit" value="submit form" > sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> sign in with Google</CustomButton>
        </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;
