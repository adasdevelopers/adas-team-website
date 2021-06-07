// Import React libaries
import React, { useRef, useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header'

/**
 *
 * @returns
 */
function Connect() {

    // React hook
    const [state, handleSubmit] = useForm("mrgredan");
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    // TODO: display success message
    if (state.succeeded) {
        return <p>Thanks for connecting!</p>;
    }


    return (
        <div id="contact-page" className="page">
            <header>
            <h1>
                Connect With Us
            </h1>
            <h5>
                We’d love to get in touch with you!
                Connect with us through email or any of our social media.
            </h5>
            </header>

            <div>
            <h3 className="text-center">
                SEND A MESSAGE
            </h3>

            <div id="connect-form" className="bg-light-blue p-5 rounded-lg">
                <form onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-3">

                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="form-email"
                    type="email"
                    name="email"
                    className="w-5/6"
                    ref={editFieldRef}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="form-name"
                    type="name"
                    name="name"
                    ref={editFieldRef}
                    className="w-5/6"
                />

                <label htmlFor="subject">
                    Subject
                </label>
                <input
                    id="form-subject"
                    type="subject"
                    name="subject"
                    ref={editFieldRef}
                    className="w-5/6"
                />

                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button
                    type="submit"
                    disabled={state.submitting}
                    ref={editButtonRef}
                    className="w-5/6 justify-self-center">
                        SEND MESSAGE
                </button>

                </form>

            </div>

            </div>
        </div>
    );
}

export default Connect;
