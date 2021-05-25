// Import React libraries
import React from 'react';
import db from "../firebase";
import { render } from '@testing-library/react';


/**
 * Displays the Job Board with data
 * pulled in from Firebase
 */
class JobBoard extends React.Component {

    // Constants
    state = {
        jobs: null
    }

    // Pull in Firebase data
    componentDidMount() {
    console.log("mounted")
    db.collection("job-postings").get().then(snapshot => {
        const jobs = []
        snapshot.forEach(doc => {
        const data = doc.data()
        jobs.push(data)
        })
        this.setState({ jobs: jobs })
        console.log(jobs.length);
    }).catch(error => console.log(error))

    }

  
    render() {
        return (
            <div 
                id="job-board-page" 
                className="page"
            >
                <header>
                    <h1>
                        Job Board
                    </h1>
                    <h5>
                        Search through our current job listings from various 
                        companies to get in touch and land your next job.
                    </h5>
                </header>


                <h2>
                    AVAILABLE JOBS
                </h2>

                <div 
                    id="job-listings-number" 
                    className="text-xl"
                >  
                    {
                        this.state.jobs && this.state.jobs.length
                    } job listings
                </div>

                <div 
                    id="job-posting"
                    className="blue-rect rounded-xl">
                    {
                        this.state.jobs &&
                        this.state.jobs.map( job => {
                            return(
                            <div className="mx-4">
                                <p className="font-title">
                                    <b>{ job.job_title }</b> <br />
                                    { job.company } <br />
                                    { job.website }
                                </p>    
                            </div>
                            )
                        })
                    }
                </div>
                
                <div 
                    id="post-a-job"
                    className="flex flex-col mt-10"
                >
                    <h4>
                        Have a job posting you'd like to advertise here?
                    </h4>

                    <button 
                        className="w-5/6 self-center md:w-2/5 lg:w-3/4"
                    >
                        POST A JOB
                    </button>
                </div>
            </div>

        )
    }

}

export default JobBoard;
