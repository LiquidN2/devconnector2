import React from 'react';

const ProfileEducationItem = props => {
    return (
        <div className="profile-education__item">
            <h3 className="profile-subheading u-margin-bottom-xsmall">{props.degree} - {props.fieldOfStudy}</h3>
            <p className="profile-subheading profile-subheading--color u-margin-bottom-xsmall">{props.school}</p>
            <p className="profile-subheading--grey-italic"><em>{props.from} - {props.to}</em></p>
            <p className="profile-text u-margin-top-small">
                {props.description}
            </p>
        </div>
    );
};

export default ProfileEducationItem;