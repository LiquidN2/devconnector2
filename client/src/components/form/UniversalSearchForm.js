import React, { Component } from 'react';
import { ControlledTextInput } from './ControlledInput';

export default class UniversalSearchForm extends Component {

    state = {
        query: ''
    };

    onQueryChange = event => {
        const query = event.target.value;
        this.setState(() => {
            return { query }
        });
    };

    onSubmit = event => {
        event.preventDefault();
        const query = this.state.query;
        this.props.onSubmit(query);
    };

    render() {
        return (
            <form className="search" onSubmit={this.onSubmit}>
                <button className="search__button search__icon" onClick={this.onSubmit}>
                    <i className="fas fa-search"></i>
                </button>
                <ControlledTextInput 
                    className="search__input"
                    fieldName="search"
                    fieldValue={this.state.query}
                    onChange={this.onQueryChange}
                    placeholder="search"
                />
            </form>
        )
    }
}
