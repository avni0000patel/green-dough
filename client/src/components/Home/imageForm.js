import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_IMAGE } from '../../utils/mutations';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';

import Auth from '../utils/auth';

const ImageForm = () => {
    const styles = {
        add__image__button: {
            color: 'white',
            background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%) ',
        }
    }

    const [image, setImage] = useState('');

    const [addImage, { error }] = useMutation(ADD_IMAGE, {
        update(cache, { data: { addImage } }) {
            try {
                const { images } = cache.readQuery({ query: QUERY_USER });

                cache.writeQuery({
                    query: QUERY_USER,
                    data: { images: [addImage, ...images] },
                });
            } catch (error) {
                throw error;
            }

            // update me object's cache
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });

                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, images: [...me.images, addImage] } },
                });
            } catch (error) {
                throw error;
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addImage({
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
        const { value } = event.target;
        setImage(value);
    };

    return (
        <div><h1 className='head'>Create Image</h1>

            {Auth.loggedIn() ? (
                <>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-lg-9">
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter image url..."
                                value={image}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical', border: '2px solid #5d0cff', }}
                                onChange={handlePhoto}
                            ></input>
                        </div>

                        <div className="col-12 col-lg-3">
                            <button className="add__image__button btn btn-block py-3" style={styles.add__image__button} type="submit">
                                Add Image
                            </button>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                                {error.message}
                            </div>
                        )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to share. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default ImageForm;
