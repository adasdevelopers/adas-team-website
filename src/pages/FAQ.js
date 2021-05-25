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

    })
    .catch( error => console.log(error) )
  }

  render() {
    return(
      <div className="page">
        <div className="page-title">
          <h1>FAQ</h1>
          <h5 className="text-center">Answering your most frequently asked questions.</h5>
        </div>

        <div id="faq-section">
        {
          this.state.questions &&
          this.state.questions.map( question => {
            return(

              <div className={question.left ? "w-3/5 bg-light-blue p-3 shadow-md rounded-3xl my-7" : "w-3/5 bg-light-blue p-3 shadow-md rounded-3xl my-7 ml-auto"}>
              <div className="px-14 my-8">
                <h4 className="font-title text-xl">{question.question}</h4>
                <p>{ question.answer}</p>
                <div className="divider-thin"></div>
              </div>
            </div>
            )
          })
        }
        </div>
      </div>

    )
  }
}

export default FAQ;
