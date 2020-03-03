import React from 'react';
import './sign-in.scss';

import { FormInput } from '../form-input/form-input.jsx';
import { CustomButton } from '../custom-button/custom-button.jsx';

import { auth, signInWithGoogle } from '../../firebase/firebase.js';

export class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({'email': '', 'password': ''});
        } catch (error){
            console.log(error);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value });
    }

    render(){
        return(
         <div className='sign-in'>
             <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>

             <form action="" onSubmit={this.handleSubmit}>
                 <FormInput name='email' 
                        type='email' 
                        value={this.state.email}
                        label='email' 
                        handleChange={this.handleChange}
                        required/>
                 <FormInput name='password' 
                        type='password' 
                        value={this.state.password}
                        label='password'
                        handleChange={this.handleChange}
                        required/>
                 <div className='buttons'>
                 <CustomButton type='submit'>Sign in</CustomButton>
                 <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                     Sign in with Google</CustomButton>
                 </div>
             </form>
         </div>   
        )
    }
}