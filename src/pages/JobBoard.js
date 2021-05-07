import { render } from '@testing-library/react';
import React from 'react';
import db from "../firebase";

class JobBoard extends React.Component {

  state = {
    jobs: null
  }

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
      <div className="page">
        <div className="page-title">
          <h1>Job Board</h1>
          <h3 className="text-lg">Search through our current job listings from various 
            companies to get in touch and land your next job.</h3>
        </div>

        <div>
          <h4>AVAILABLE JOBS</h4>
        </div>
        <div className="blue-rect rounded-xl">
          {
            this.state.jobs &&
            this.state.jobs.map( job => {
              return(
                <div className="mx-4">
                  <p className="font-title">{ job.job_title }</p>
                  <p>{ job.company }</p>
                  <p>{ job.website }</p>
                </div>
              )
            })
          }
        </div>
        
        <div className="flex flex-col mt-10">
          <h4 className="text-black">Have a job posting you'd like to advertise here?</h4>
          <button className="w-5/6 self-center md:w-2/5 lg:w-3/4">POST A JOB</button>
        </div>
      </div>

    )
  }
  
}

export default JobBoard;
