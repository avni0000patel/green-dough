import React from 'react';

const PostList = ({
    profiles,
}) => {

    return (
        <div>
            {profiles &&
                profiles.map((profile) => (
                    <div key={profile._id}>
                        <div>
                            <img className="profile__image" src={profile.image} alt="profileimage" width={80} height={80}></img>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList;
