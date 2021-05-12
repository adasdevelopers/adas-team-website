import { useForm, ValidationError } from '@formspree/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

//TODO: fix links
function Join() {
  library.add(fab); //importing brand icons for social-media
  const [state, handleSubmit] = useForm("mqkwpaoe");
  if (state.succeeded) {
      return <p>Thanks for connecting!</p>;

  }

  return (
    <div className="page">
      <div className="page-title">
        <h1>Join Us</h1>
        <h5>Join the Ada's Team community to stay updated
          and get involved!</h5>
      </div>

      <h3>JOIN US</h3>
      <p className="my-5">Subcribe to our mailing list to receive updates on events, opportunities,
        scholarships, and more!</p>

      <div>

        <div id="connect-form" className="bg-light-blue p-5 rounded-lg">
          <form onSubmit={handleSubmit} 
                className="grid grid-cols-1 gap-3">
            
            <label htmlFor="email">Email Address</label>
            <input
              id="form-email"
              type="email" 
              name="email"/>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}/>
          
            <label htmlFor="name">First Name</label>
            <input
              id="form-first-name"
              type="name" 
              name="first-name"/>

            <label htmlFor="name">Last Name</label>
            <input
              id="form-last-name"
              type="name" 
              name="last-name"/>

            <label htmlFor="name">Student Affiliation</label>
            <input
              id="form-student-group"
              type="name" 
              name="student-group-name"/>

            <label htmlFor="name">Faculty</label>
            <input
              id="form-faculty"
              type="name" 
              name="faculty-name"/>

            <button type="submit" disabled={state.submitting}
                    className="w-5/6 justify-self-center">
              SUBSCRIBE
            </button>
          </form> 

        </div>

      </div>
      <div className="divider-thick"></div>
      <h4>ADA'S BASE</h4>

      <p>
      Join the Ada's Base Discord server: 
        an online community of students that share job opportunities and hackathons, 
        review resumes, and hold each other accountable with virtual coworking sessions. 
      </p>

      <button className="w-4/5">
        <span className="pr-3 text-lg"><FontAwesomeIcon icon={['fab', 'discord']}/></span>
        Join Ada's Base
      </button>




    </div>
  );
}

export default Join;
