import { useForm, ValidationError } from '@formspree/react';


function Connect() {

  const [state, handleSubmit] = useForm("mrgredan");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }


  return (
    <div className="page">
      <div className="page-title">
        <h1>Connect With Us</h1>
        <h3>We’d love to get in touch with you! 
          Connect with us through email or any of our social media.</h3>
      </div>

      <div>
        <h4 className="text-center">SEND A MESSAGE</h4>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
    </form>
      </div>
    </div>
  );
}

export default Connect;
