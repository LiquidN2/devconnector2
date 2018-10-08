import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthPage = () => {
    return (
        <Redirect to="/login" />
    );
};

const mapStateToProps = state => {

}

export default connect()(AuthPage);