import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROFILE } from '../../utils/mutations';
import { QUERY_PROFILES, QUERY_ME } from '../../utils/queries';

const ProfileForm = () => {
    const styles = {
        add__image__button: {
            border: '1px solid black'
        }
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
        <div>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <img src={image} alt="" width={80} height={80} />
                <input
                    type="file"
                    onChange={handlePhoto}>
                </input>
                <button type="submit" style={styles.add__image__button}>
                    Upload Image
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;
