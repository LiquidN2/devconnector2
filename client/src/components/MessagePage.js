import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectionNotify } from '../socketIOClient/socketIOClient';

import setAuthToken from './../utils/setAuthToken';

// load components
import Header from './header/Header';
import ProfileBase from './profile/ProfileBase';
import MessageHistory from './messages/MessageHistory';
import MessageConversation from './messages/MessageConversation';
import MessageSender from './messages/MessageSender';
// import ProfileSummary from './profile/ProfileSummary';
// import ProfileExperience from './profile/ProfileExperience';
// import ProfileEducation from './profile/ProfileEducation';
// import ProfileSkills from './profile/ProfileSkills';
import Loading from './Loading';

// Load actions
import { setCurrentUserAsync } from './../actions/userActions';
import { getCurrentUserProfileAsync } from './../actions/profileActions';
import { getNumConnectionsAsync } from '../actions/connectionActions';
import { getCurrentUserPostCountAsync } from '../actions/postActions';

class MessagePage extends Component {
  state = {
    username: '',
    message: '',
    messages: []
  };

  // socket = io('/');

  componentDidMount = () => {
    // connectionNotify(() => {
    //   console.log('connected to server')
    // })

    setAuthToken(localStorage.getItem('token'));
    // get current user
    if (!this.props.user._id) {
      this.props.setCurrentUserAsync();
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    
  }
  
  render() {
    const { path } = this.props.match;
    return (
      <React.Fragment>
        <Header path={path}/>
        <section className="section-messages">
          <div className="container row">
            <div className="message-container u-margin-top-3rem">
              <MessageHistory />
              <MessageConversation />
              <MessageSender />
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = {
  setCurrentUserAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage)