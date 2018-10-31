import React, { Component } from 'react';

export default class PendingRequestItem extends Component {
  handleApprove = event => {
    event.preventDefault();
    const pendingRequestId = this.props._id;
    const { user, profile, selfProfileId } = this.props;    
    const connectionApprovalData = { user, profile, selfProfileId, pendingRequestId };
    this.props.onApproveConnection(connectionApprovalData);
  };

  handleDecline = event => {
    event.preventDefault();
    const userId = this.props.user._id;
    const pendingRequestId = this.props._id;
    const connectionDeclineData = { userId, pendingRequestId };
    this.props.onDeclineConnection(connectionDeclineData);
  };

  render() {
    return (
      <div className="connection-item">
        <img src={this.props.user.avatar} alt={this.props.user.name} className="connection-item__user-photo" />
        <div className="connection-item__main-content">
          <div className="connection-item__description">
            <p className="connection-item__user-name">{this.props.user.name}</p>
            <p className="connection-item__user-text connection-item__user-text--color">
              {
                this.props.profile.company ? (
                  `${this.props.profile.status} at ${this.props.profile.company}`
                ) : (
                  this.props.profile.status
                )
              }
            </p>
            <p className="connection-item__user-text">{this.props.profile.location}</p>
          </div>
          <div className="connection-item__pending-actions">
            <button 
              type="button"
              className="btn btn--small btn--color-primary" 
              onClick={this.handleApprove}
              disabled={this.props.isApprovingRequest}
            >
              Approve
            </button>
            
            <button 
              className="btn btn--small"
              onClick={this.handleDecline}
              disabled={this.props.isApprovingRequest}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    )
  };
};
