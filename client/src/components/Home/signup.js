import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
    const styles = {
        signup: {
            padding: '2rem 2rem',
        },
        label: {
            color: 'white',
        },
        button: {
            color: 'white',
            background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%) ',
        }
    }

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="signup" style={styles.signup}>
            <div className="card">
                <div className="card-body">
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className="form-input"
                                placeholder="Your username"
                                name="username"
                                type="text"
                                value={formState.name}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <br />
                            <input
                                className="form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <br />
                            <input
                                className="form-input"
                                placeholder="******"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <br />
                            <button
                                className="btn btn-block"
                                style={styles.button}
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    )}

                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signup;
