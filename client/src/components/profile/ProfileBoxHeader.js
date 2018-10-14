import React, { Component } from 'react'

export default class ProfileBoxHeader extends Component {
    onHandleAddItem = event => {
        this.props.onAddNewItem();
    }

    render() {
        if (this.props.withTools) {
            return (
                <React.Fragment>
                    <div className="profile-heading-wrapper u-margin-bottom-3rem">
                        <h2 className="profile-heading">Update {this.props.boxTitle}</h2>
                        <button id="btn-add-experience" className="profile-edit__icon btn-icon" onClick={this.onHandleAddItem}>
                            <i className="fas fa-plus fa-lg"></i>
                        </button>
                    </div>
                    <hr className="profile-text-separater" />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h2 className="profile-heading u-margin-bottom-3rem">{this.props.boxTitle}</h2>
                    <hr className="profile-text-separater" />
                </React.Fragment>
            )
        }


    }
}
