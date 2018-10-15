import React from 'react';

import Header from './header/Header';
import ProfileBase from './profile/ProfileBase';

const PostPage = props => {
    return (
        <React.Fragment>
            <Header />
            <section className="section-profile">
                <div className="container row u-padding-top-2rem">
                    <div className="col-1-of-4">
                        <div className="row">
                            {/* <ProfileBase /> */}
                        </div>                
                    </div>
                    <div className="col-2-of-4">
                        This is post page
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default PostPage;