// Import libraries
import React from 'react'
import db from '../firebase'
import Header from '../components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';



/**
 * Displays FAQ for Ada's Team
 */
 AOS.init();

 AOS.init({
   easing: 'ease', // default easing for AOS animations
     once: true, // whether animation should happen only once - while scrolling down
     mirror: false, // whether elements should animate out while scrolling past them
     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

   });

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
            <div id="faq-page" className="page animate-fade-in-down">
              <Header title="FAQ" subtitle="Answering your most frequently asked questions."/>


                <div id="faq-section">
                {
                    this.state.questions &&
                    this.state.questions.map( question =>
                    {
                        return(
                          <div data-aos={
                              question.left ?
                              "fade-right"
                              :
                              "fade-left"} data-aos-duration="900"
                     data-aos-easing="ease-in-sine">
                            <div
                                className={
                                    question.left ?
                                    "md:w-3/5 w-4/5 bg-light-blue p-3 shadow-md rounded-3xl my-7"
                                    :
                                    "md:w-3/5 w-4/5 bg-light-blue p-3 shadow-md rounded-3xl my-7 ml-auto"}
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
