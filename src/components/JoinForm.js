// Import libraries
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function JoinForm() {

    const [state, handleSubmit] = useForm("mqkwpaoe");

    return (    
        <div 
            id="connect-form" 
            className="bg-light-blue p-5 rounded-lg my-7"
        >
            <form 
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 gap-3 justify-items-stretch 
                        lg:grid-cols-2 lg:mx-10 lg:my-3">
            
                <div className="col-span-2">                
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="form-email"
                        type="email" 
                        name="email"/>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}/>
                </div>

                <div>
                    <label htmlFor="name">
                        First Name
                    </label>
                    <input
                        id="form-first-name"
                        type="name" 
                        name="first-name"/>
                </div>
                
                <div>
                    <label htmlFor="name">
                        Last Name
                    </label>
                    <input
                        id="form-last-name"
                        type="name" 
                        name="last-name"/>
                </div>

                <div>
                    <label htmlFor="name">
                        Student Affiliation
                    </label>
                    <input
                        id="form-student-group"
                        type="name" 
                        name="student-group-name"/>
                </div>

                <div>
                    <label htmlFor="name">
                        Faculty
                    </label>
                    <input
                        id="form-faculty"
                        type="name" 
                        name="faculty-name"/>
                </div>


                <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-5/6 justify-self-center 
                        col-span-2 lg:w-2/5"
                >
                    SUBSCRIBE
                </button>
            </form> 

        </div>
    );

}

export default JoinForm;