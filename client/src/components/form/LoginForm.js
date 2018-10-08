import React from 'react';

import { ControlledEmailInput, ControlledPasswordInput } from './ControlledInput';

class LoginForm extends React.Component {

    state = {
        email: '',
        password: ''
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

    onSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.onSubmit(user);
    }

    render() {

        return (
            <div className="tab-content">
                <div id="login-form">
                    <div className="tab-content__heading">
                        <h1>Welcome Back!</h1>
                    </div>
                    <form className="form" onSubmit={this.onSubmit}>
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
                            <button
                                id="login"
                                className="btn btn--login btn--color-primary"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;