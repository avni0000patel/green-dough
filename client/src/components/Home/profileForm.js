import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROFILE } from '../../utils/mutations';
import { QUERY_PROFILES, QUERY_ME } from '../../utils/queries';

import './profileForm.css';

const ProfileForm = () => {
    const styles = {
        add__image__button: {
            border: '1px solid black'
        },
        container: {
            background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '15px 15px 15px rgba(46, 54, 68, 0.4)',
            display: 'flex',
            alignItems: 'center',
            padding: '5rem 3rem',
            marginTop: '20px',
            marginBottom: '20px',
            float: 'right',
            width: 'calc(100% - 240px)',
            marginRight: '10px',
        },
    }

    const [image, setImage] = useState('');

    const [addProfile] = useMutation(ADD_PROFILE, {
        update(cache, { data: { addProfile } }) {
            try {
                const { profiles } = cache.readQuery({ query: QUERY_PROFILES });

                cache.writeQuery({
                    query: QUERY_PROFILES,
                    data: { profiles: [addProfile, ...profiles] },
                });
            } catch (error) {
                throw error;
            }

            // update me object's cache
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });

                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, profiles: [...me.profiles, addProfile] } },
                });
            } catch (error) {
                throw error;
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addProfile({
                variables: {
                    image,
                },
            });
            setImage('');
        } catch (error) {
            throw error;
        }
    };

    const handlePhoto = (event) => {
        console.log(event.target.files);
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="container flex-column justify-center" style={styles.container}>
            <form
                className="avatar-upload"
                onSubmit={handleFormSubmit}
            >
                <div className="avatar-edit">
                    <input id="imageUpload" type="file" className="imageUpload" onChange={handlePhoto} accept=".png, .jpg, .jpeg" />
                    <label className="label" for="imageUpload"></label>
                </div>
                <div className="avatar-preview">
                    <img className="imagePreview" alt="" src={image}
                        style={{ backgroundImage: `url("https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png")` }} />
                </div>
                <button className="uploadImage" type="submit" style={styles.add__image__button}>
                    Upload
                </button>
            </form >
        </div >
    );
};

export default ProfileForm;
