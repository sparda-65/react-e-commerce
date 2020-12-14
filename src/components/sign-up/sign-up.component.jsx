import React, { Component } from 'react'

import CustomButton from '../custom-button/custom-button.component';
import FormInput from "../form-input/form-input.component";

import {auth,creatUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email:'',
             password:'',
             confirmpassword:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName,email,password,confirmpassword}=this.state;

        if(password !== confirmpassword){
            alert('password et confirme password ne match pas');
            return;
        }

        try {
            const { user }= await auth.createUserWithEmailAndPassword(email,password);

            await creatUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmpassword:''
            });

        } catch (error) {
            console.error(error);
        }
    
      };
    
      handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value,
        });
        console.log(value);
      };
    
    render() {
        const {displayName,email,password,confirmpassword}=this.state;
        return (
            <div className="signup">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your e-mail and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="displayName"
                        type="text"
                        label="Display Name"
                        value={displayName}
                        required
                    />

                    <FormInput
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        label="Email"
                        value={email}
                        required
                    />
            
                    <FormInput
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                        required
                    />

                    <FormInput
                        handleChange={this.handleChange}
                        name="confirmpassword"
                        type="password"
                        label="Confirme Password"
                        value={confirmpassword}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="submit form" > sign up</CustomButton>
                    </div>
          
                 </form>
                
            </div>
        )
    }
}

export default SignUp;