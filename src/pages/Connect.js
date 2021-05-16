import { useForm, ValidationError } from '@formspree/react';


function Connect() {

  // React hook
  const [state, handleSubmit] = useForm("mrgredan");
  if (state.succeeded) {
      return <p>Thanks for connecting!</p>;

  }


  return (
    <div className="page">
      <div className="page-title">
        <h1>Connect With Us</h1>
        <h5>We’d love to get in touch with you! 
          Connect with us through email or any of our social media.</h5>
      </div>

      <div>
        <h3 className="text-center">SEND A MESSAGE</h3>

        <div id="connect-form" className="bg-light-blue p-5 rounded-lg">
          <form onSubmit={handleSubmit} 
                className="grid grid-cols-1 gap-3">
            
            <label htmlFor="email">Email Address</label>
            <input
              id="form-email"
              type="email" 
              name="email"
              className="w-5/6"/>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}/>
          
            <label htmlFor="name">Name</label>
            <input
              id="form-name"
              type="name" 
              name="name"
              className="w-5/6"/>

            <label htmlFor="subject">Subject</label>
            <input
              id="form-subject"
              type="subject" 
              name="subject"
              className="w-5/6"/>

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"/>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}/>

            <button type="submit" disabled={state.submitting}
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
