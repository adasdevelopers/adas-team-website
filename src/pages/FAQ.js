import React from 'react'
import db from '../firebase'


class FAQ extends React.Component {

  
  state = {
    questions: null,
  
  }

  componentDidMount() {
    console.log("mounted")
    db.collection("questions").get()
    .then( snapshot => {
      const questions = []
      snapshot.forEach( doc => {
        const data = doc.data()
        questions.push(data)
      })
      this.setState({ questions: questions })
      console.log(questions) 
    })
    .catch( error => console.log(error) )
  }
  
  render() {
    return(
      
      <div className="FAQ">
        <h1>Frequently Asked Questions</h1>
        {
          this.state.questions &&
          this.state.questions.map( question => {
            return(
          
              <div id="questions" className="bg-light-blue p-3 shadow-md rounded-lg px-20 my-4 w-2/3">
                
                <h4 className="font-title">{ question.question}</h4>
                <p>{ question.answer }</p>
                <br></br>
                </div>
            
            )
          })
        }
      </div>
    )
  }
}

export default FAQ;
