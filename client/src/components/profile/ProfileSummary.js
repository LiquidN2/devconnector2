import React from 'react';

import ProfileBox from './ProfileBox';

// const SummaryContent = props => {
//     return (
//         <p className="profile-text u-margin-top-3rem">
//             {props.text}
//         </p>
//     );
// };

class SummaryContent extends React.Component {
    render() {
        return (
            <p className="profile-text u-margin-top-3rem">
                {this.props.text}
            </p>
        )
    }
}

const ProfileSummary = ProfileBox(SummaryContent);


// class ProfileSummary extends React.Component {
//     render() {
//         return (
//             <ProfileBox title='Summary' component={ProfileTextContent}/>
//         );
//     }
// };

export default ProfileSummary;