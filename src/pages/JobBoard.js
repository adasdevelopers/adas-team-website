// Import React libraries
import React from 'react';
import db from "../firebase";
import { render } from '@testing-library/react';
import Header from '../components/Header'
import { Button } from 'react-scroll';


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
                <Header title="Job Board" subtitle=" Search through our current job listings from various companies to get in touch and land your next job."></Header>
             
                <            div className="md:mx-48 sm:mx-20 lg:mx-48 xl:mx-72">
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
                        this.state.jobs.map( ({job_title, company, description, website, apply_link, email, image}, i) => (
                                <JobPosting key={`jobposting${i}`} title={job_title} company={company} description={description} website={website} apply_link={apply_link} email={email} image={image}/>
                            )
                        )
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
                        className="w-full self-center md:w-2/5"
                    >
                        POST A JOB
                    </button>
                </div>
                </div>
            </div>

        )
    }

}

const JobPosting = ({title, company, website, description, apply_link, email, image}) => (
    <div className="mx-4 flex">
        <img className="rounded-full h-24 w-24  mr-16" src={image ? image : ""} />
        <div>
            <div className="font-title">
                <h3>{ title }</h3>
                <p>{ company }</p>
                <p> {description}</p>
                <a href={ website }>Website</a>
            </div>
            <div className="mt-4 flex justify-between">
                {email && <a  id="email" className="flex-1 mr-2 border-2 border-solid border-blue bg-white px-2 py-1 text-blue font-semibold rounded uppercase" href={`mailto:${email}`}>Contact</a>}
                {apply_link && <a id="application_link" className="flex-1 mr-2 border-2 border-blue bg-blue px-2 py-1 text-white font-semibold rounded uppercase" href={apply_link} >Apply</a>}
            </div>
        </div>
    </div>
)

export default JobBoard;
