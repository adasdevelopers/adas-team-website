// Import libraries
import React from 'react'
import db from '../firebase'


/**
 * Displays FAQ for Ada's Team
 */
class FAQ extends React.Component {

  
    state = {
        questions: null,

    }

    // Pull in data from Firebase
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
            <div id="faq-page" className="page">
                <header>
                    <h1>
                        FAQ
                    </h1>
                    <h5>
                        Answering your most frequently asked questions.
                    </h5>
                </header>

                <div id="faq-section">
                {
                    this.state.questions &&
                    this.state.questions.map( question => 
                    {
                        return(
                            <div 
                                className={
                                    question.left ? 
                                    "w-3/5 bg-light-blue p-3 shadow-md rounded-3xl my-7" 
                                    : 
                                    "w-3/5 bg-light-blue p-3 shadow-md rounded-3xl my-7 ml-auto"}
                            >
                                <div id="faq-question-and-answer" className="px-14 my-8">
                                    <h4 id="faq-question" className="font-title text-xl">
                                        {question.question}
                                    </h4>
                                    <p id="faq-answer">
                                        { question.answer}
                                    </p>
                                    
                                    <div className="divider-thin"></div>
                                </div>
                        </div>
                        )
                    })
                }
                </div>
                
                <div className="divider-thick"></div>
                
                <div>
                    <h2 className="pt-4 pb-7">
                        Still have questions?
                    </h2>

                    <p>
                        Please feel free to reach out to us at:<br/>
                        <a
                            href="mailto:adasteam@ualberta.ca"
                            className="text-blue font-semibold"
                        >
                            adasteam@ualberta.ca
                        </a>
                    </p>
                </div>

            </div>

        )
    }
}

export default FAQ;
