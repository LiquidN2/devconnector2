import React from 'react';

import { formatDateRange } from './../../utils/formatDate';

const ProfileEducationItem = props => {
    const dates = formatDateRange(props.from, props.to);
    return (
        <div className="profile-education__item">
            <h3 className="profile-subheading u-margin-bottom-xsmall">{props.degree} - {props.fieldOfStudy}</h3>
            <p className="profile-subheading profile-subheading--color u-margin-bottom-xsmall">{props.school}</p>
            <p className="profile-subheading--small profile-subheading--small--grey u-margin-bottom-xsmall">{props.location}</p>
            <p className="profile-subheading--small profile-subheading--small--grey-italic">
                {`${dates.formattedFromDate} - ${dates.formattedToDate} ${dates.duration}`} 
            </p>
            <p className="profile-text u-margin-top-small">
                {props.description}
            </p>
        </div>
    );
};

export default ProfileEducationItem;