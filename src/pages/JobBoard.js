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

    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="JobBoard">
        <h1>Jobs Postings</h1>
        {
          this.state.jobs && this.state.jobs.map(job => {
            return (
              <div>
                <p>{
                  job.company
                }</p>
                <p>{
                  job.title
                }</p>
                <br></br>
              </div>
            )
          })
        } </div>
    )
  }
}

export default JobBoard;
