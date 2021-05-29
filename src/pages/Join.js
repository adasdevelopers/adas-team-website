// Import libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Import images
import icon from '../assets/img/eicon_head_1.png'

// Import components
import JoinForm from '../components/JoinForm'


/**
 * Displays a form that allows the users to subscribe
 * to the mailing list
 * @returns
 */
function Join() {
    // importing brand icons
    library.add(fab);

    // TODO: display popup sucess message
    // if (state.succeeded) {
    //     return <p>Thanks for connecting!</p>;
    //
    // }

    return (
        <div id="join-page" className="page">
            <header>
                <h1>
                    Join Us
                </h1>
                <h5>
                    Join the Ada's Team community to stay updated
                    and get involved!
                </h5>
            </header>

                <h3>
                    JOIN US
                </h3>
                <p className="my-5">
                    Subcribe to our mailing list to receive updates on events, opportunities,
                scholarships, and more!
                </p>

                <JoinForm />


            <div className="divider-thick lg:invisible"></div>

            <img
                src={icon}
                alt="Ada's Team icon"
                className="hidden
                            lg:block px-2 w-36 pr-7 pb-28 float-left">
            </img>

            <div id="discord-invite">
                <h4 className="uppercase lg:normal-case">
                    Ada's Base
                </h4>
                <div className="container py-3">
                    <p className="block lg:hidden">
                        Join the Ada's Base Discord server:
                        an online community of students that share job opportunities and hackathons,
                        review resumes, and hold each other accountable with virtual coworking sessions.
                    </p>

                    <p className="hidden lg:block">
                        Pre-COVID, students were able to drop-by anytime to our room and connect with
                        other students. However, that casual, supportive atmosphere has now been hampered due
                        to the virtual environment.
                        <br /><br />
                        To welcome new students and help us all stay connected during COVID-19, join
                        the Ada's Base Discord server! Join a community of students that share job opportunities
                        and hackathons, review resumes, host jackbox sessions, and hold you accountable during
                        virtual coworking sessions.
                    </p>

                    <button className="w-4/5 lg:w-2/6">
                        <span className="pr-3 text-lg">
                            <FontAwesomeIcon icon={['fab', 'discord']}/>
                        </span>
                        Join Ada's Base
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Join;
