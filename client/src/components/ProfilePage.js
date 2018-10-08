import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLogout } from './../actions/authActions';

import Header from './layout/Header';
import ProfileBase from './profile/ProfileBase';
import ProfileSummary from './profile/ProfileSummary';
import ProfileExperience from './profile/ProfileExperience';
import ProfileEducation from './profile/ProfileEducation';
import ProfileSkills from './profile/ProfileSkills';

const profile = {
    _id : "5badbd71b31a6f3c98ed24b9",
    skills: [ "html", "css", "javascript", "nodejs", "reactjs", "python", "php"],
    user : "5badbd34b31a6f3c98ed24b8",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi! Ea, culpa rem quae officiis distinctio animi nihil.",
    handle : "hughnguyen",
    website : "hnguyen.com.au",
    status : "junior dev",
    experience : [{
        _id: "1",
        title: "Research Assistant",
        company: "MGH",
        location: "Boston MA",
        from: "01/07/2008",
        to: "30/06/2009",
        current: false,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi!"
    },{
        _id: "2",
        title: "Research Assistant",
        company: "MGH",
        location: "Boston MA",
        from: "01/07/2008",
        to: "30/06/2009",
        current: false,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi!"
    },{
        _id: "3",
        title: "Research Assistant",
        company: "MGH",
        location: "Boston MA",
        from: "01/07/2008",
        to: "30/06/2009",
        current: false,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi!"
    }],

    education : [{
        _id: "1",
        degree: "Master of Commerce",
        fieldOfStudy: "Commerce Accounting",
        school: "The University of Sydney",
        location: "Boston MA",
        from: "11/07/2011",
        to: "31/12/2012",
        current: false,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi!"
    },{
        _id: "2",
        degree: "Master of Commerce",
        fieldOfStudy: "Commerce Accounting",
        school: "The University of Sydney",
        location: "Boston MA",
        from: "11/07/2011",
        to: "31/12/2012",
        current: false,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi!"
    },{
        _id: "3",
        degree: "Master of Commerce",
        fieldOfStudy: "Commerce Accounting",
        school: "The University of Sydney",
        location: "Boston MA",
        from: "11/07/2011",
        to: "31/12/2012",
        current: false,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi!"
    }],
}


const ProfilePage = props => {
    
    // const getProfiles = () => {
    //     axios.get('api/profile', {
    //         headers: {
    //             'Authorization': localStorage.getItem('token')
    //         }
    //     })
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }

    return (
        <React.Fragment>
            <Header />
            <section className="section-profile">
                <div className="container row u-padding-top-2rem">
                    <div className="col-1-of-4">
                        <div className="row">
                            <ProfileBase />
                        </div>                
                    </div>
                    <div className="col-2-of-4">
                        <div className="row">
                            <ProfileSummary boxTitle="Summary" text={profile.bio}/>
                        </div>
                        <div className="row">
                            <ProfileExperience boxTitle="Experience" experiences={profile.experience}/>
                        </div>
                        <div className="row">
                            <ProfileEducation boxTitle="Education" educations={profile.education}/>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="row">
                            <ProfileSkills boxTitle="Skills" skills={profile.skills} />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

const mapDispatchToProps = { userLogout };

export default connect(undefined, mapDispatchToProps)(ProfilePage);