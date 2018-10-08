import React from 'react';

export const ControlledEmailInput = props => {
    return (
        <input
            type="email"
            name="email"
            className="form__input"
            placeholder="email"
            value={props.email}
            onChange={props.onChange}
            required
        />
    );
};

export const ControlledPasswordInput = props => {
    return (
        <input
            type="password"
            name="password"
            className="form__input"
            placeholder="password"
            value={props.password}
            onChange={props.onChange}
            required
        />
    );
};

export const ControlledPassword2Input = props => {
    return (
        <input
            type="password"
            name="password2"
            className="form__input"
            placeholder="password"
            value={props.password2}
            onChange={props.onChange}
            required
        />
    );
};

export const ControlledTextInput = props => {
    if (props.required) {
        return (
            <input
                type="text"
                name={props.fieldName}
                className="form__input"
                placeholder={props.placeholder}
                value={props.fieldValue}
                onChange={props.onChange}
                required
            />
        );
    } else {
        return (
            <input
                type="text"
                name={props.fieldName}
                className="form__input"
                placeholder={props.placeholder}
                value={props.fieldValue}
                onChange={props.onChange}
            />
        );
    }
};

