import React from 'react';

import { ControlledEmailInput, ControlledPasswordInput, ControlledPassword2Input, ControlledTextInput } from './ControlledInput';

class RegisterForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        agreetc: false
    };

    onNameChange = event => {
        const name = event.target.value;
        this.setState(() => {
            return { name };
        });
    };

    onEmailChange = event => {
        const email = event.target.value;
        this.setState(() => {
            return { email };
        });
    };

    onPasswordChange = event => {
        const password = event.target.value;
        this.setState(() => {
            return { password };
        });
    };

    onPassword2Change = event => {
        const password2 = event.target.value;
        this.setState(() => {
            return { password2 };
        });
    };

    onAgreeTC = event => {
        const isAgreed = event.target.checked;
        this.setState(() => {
            return {
                agreetc: isAgreed
            };
        });
    }

    onSubmit = event => {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        
        if (this.state.agreetc) {
            this.props.onSubmit(newUser);
        }
    }


    render() {

        return (
            <div className="tab-content">
                <div id="register-form">
                    <div className="tab-content__heading">
                        <h1>Register a New Account</h1>
                    </div>
                    <form className="form" onSubmit={this.onSubmit}>
                        <div className="form__group">
                            <ControlledTextInput 
                                fieldName='name' 
                                fieldValue={this.state.name} 
                                onChange={this.onNameChange}
                                placeholder='name'    
                            />
                        </div>
                        <div className="form__group">
                            <ControlledEmailInput 
                                email={this.state.email} 
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="form__group">
                            <ControlledPasswordInput 
                                password={this.state.password} 
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        <div className="form__group">
                            <ControlledPassword2Input 
                                password2={this.state.password2} 
                                onChange={this.onPassword2Change}
                            />
                        </div>

                        <div className="form__group">
                            <label htmlFor="agreetc" className="checkbox-container">
                                Agree Terms and Conditions
                                <input type="checkbox" name="agreetc" id="agreetc" required onChange={this.onAgreeTC}/>
                                <span className="checkbox-checkmark"></span>
                            </label>
                        </div>

                        <div className="form__group">
                            <button
                                id="login"
                                className="btn btn--login btn--color-primary"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterForm;