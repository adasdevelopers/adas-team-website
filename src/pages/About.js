// Import icons from libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'

// Import initiative assets
import about_image from "../assets/img/about.svg"
import dev_image from "../assets/img/ada_bot_scarf.png";
import student_image from "../assets/img/ada_bot_sleepy.png";
import mentor_image from "../assets/img/ada_bot_hands_up.png";
import podcast_image from "../assets/img/ada_bot_hat1.png";
import React from 'react'
import db from '../firebase'


/**
 * Displays information about Ada's Team
 * initiatives and executive team
 *
 */
class About extends React.Component {

    // Constants
    state = {
        initiatives: null,
        executives: null
    }

    // Pull in data from Firebase
    componentDidMount() {

        console.log("mounted")
        db.collection("executives").get()
        .then( snapshot => {
            const executives = []
            snapshot.forEach(doc => {
            const data = doc.data()
            executives.push(data)

            })
            this.setState({executives: executives})
            console.log(executives)
        })
        .catch(error => console.log(error))

        db.collection("initiatives").get()
        .then( snapshot => {
            const initiatives = []
            snapshot.forEach(doc => {
            const data = doc.data()
            initiatives.push(data)
            })
            this.setState( {initiatives: initiatives})
            console.log(initiatives)
        })
        .catch(error => console.log(error))
    }


    render() {
        library.add(fab, faEnvelope); //importing brand icons for social-media
        const images = [dev_image, student_image, mentor_image, podcast_image];


        return (
            <div className="page animate-fade-in-down">
            <div
                id="about_image"
                className=" mx-auto static p-5 md:p-5 relative animate-fade-in-down mb-72" >
                {/* About image */}
                <img
                    id="about"
                    src={about_image} alt="people sitting on infographics"
                    className="absolute inset-y-0 mt-1 z-40 lg:inset-y-0 lg:right-0 ">
                </img>
                <Header title="About" subtitle="Learn more about Ada's Team."/>
                </div>

                {/* Title Intro */}
                <div id="about-goal" className="mt-20 px-36">
                    <p>
                        In Ada's Team, our goal is to
                        <b> promote diversity in computing science, games, technology, engineering, and
                        mathematics. </b>
                        By diversity, we include but are not limited to the following categories:
                        gender, race, ethnicity, religion, ability, sexuality, social class, and any other factor
                        of discrimination or minority group. <br />
                        <b>We embrace and celebrate your differences, striving
                        to foster an inclusive culture and safe space for everyone to collaborate and thrive in.</b>
                    </p>
                </div>

                <br/>


                <div className="divider-thick mx-36 "></div>

                {/* Initiative block */}
                <div id="initiatives" className="my-28 mx-36">
                    <h2 className="pb-4">OUR INITIATIVES</h2>
                    {/* Initiative information */}
                    <p
                        className="font-body italic text-sm mb-20">Integer auctor at proin posuere etiam integer amet sed. Ut pellentesque
                        nullam et adipiscing ultrices amet, interdum eu vel.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-10">



                        {this.state.initiatives && this.state.initiatives.map((initiative, i) => (

                        <div className="grid justify-items-center">
                            <div className="initiative-image">
                            {initiative["image"] !== "" && <img src={images[i]} alt="adas-team-bot"
                            className="h-40 w-30 pb-3" />}
                            </div>

                            <h4 className="font-title text-2xl">
                                {initiative["name"]}
                            </h4>

                            <div className="description text-left">
                                <p>{initiative["description"]}</p>
                            </div>

                            <div className="initiative-social-media" className="my-2 space-x-4">
                                {initiative["contact"]["instagram"] !== "" && (
                                    <a href={initiative["contact"]["instagram"]} className="text-3xl">
                                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                    </a>)
                                }
                                {initiative["contact"]["email"] !== "" && (
                                    <a href={initiative["contact"]["email"]} className="text-3xl">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </a>)
                                }
                            </div>
                        </div>
                        ))}

                    </div>


                </div>

                {/* Slack and Discord Invite links*/}
                <div
                    id="join-links"
                    className="flex flex-col space-y-5 py-5 items-stretch my-32 mx-36 mr-48"
                >
                    <div id="adas-tutoring-join">
                        <h3 className="font-title">
                            Ada's Podcast
                        </h3>
                        <p>
                            Get FREE access to virtual one-on-one tutoring sessions, and connect
                            with our students through virtual hangouts and study group sessions.
                            There are tutors available to help with various CMPUT, MATH and STAT courses.
                        </p>
                        <button
                            className="lg:w-1/5">
                            {/* TODO: add Slack invite link */}
                            <a href="#" alt="Ada's Team Tutoring Slack Invite Link">
                                <span className="pr-3 text-lg">
                                    <FontAwesomeIcon icon={['fab', 'slack']}/>
                                </span>
                                Join Ada's Tutoring
                            </a>

                        </button>
                    </div>
                    <div id="adas-base-join">
                        <h3 className="font-title">
                            Ada's Base
                        </h3>
                        <p>
                            Join the Ada's Base Discord server: an online community of students that
                            share job opportunities and hackathons, review resumes, and hold each other
                            accountable with virtual coworking sessions.
                        </p>
                        <button
                            className="lg:w-1/5">
                            {/* TODO: add Discord invite link */}
                            <a href="#" alt="Ada's Team Discord Invite Link">
                                <span className="pr-3 text-lg">
                                    <FontAwesomeIcon icon={['fab', 'discord']}/>
                                </span>
                                Join Ada's Base
                            </a>
                        </button>
                    </div>
                </div>

                {/* Executive information from Firebase */}
                <div id="executive-team">
                    <div className="title my-10 mx-36">
                        <h2>
                            MEET THE TEAM
                        </h2>
                        <h3 className="font-title text-pink text-2xl">
                            2020-2021
                        </h3>
                    </div>


                    {
                        this.state.executives && this.state.executives.map((executive, i) =>

                            <div id="executives" className="blue-rect-shadow mx-36">

                                <div alt="Image of an executive of Ada's Team">
                                    {executive["image"] !== "" && executive["image"]}
                                </div>
                                <div id="executive-information">
                                    <div className="font-title font-bold text-xl">
                                        {executive["name"]}
                                    </div>
                                    <div className="mb-2">
                                        <p>
                                            <em>{executive["role"]}</em>
                                        </p>
                                    </div>
                                    <div>
                                        <p>{executive["description"]}</p>
                                    </div>
                                </div>

                                {/* Executive Contact Information */}
                                <div id="executive-contact" className="my-2 space-x-4 text-3xl">
                                    <a
                                        href={executive.contact.LinkedIn}>
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                    </a>
                                    <a
                                        href={executive.contact.Github} alt="Github">
                                            <FontAwesomeIcon icon={['fab', 'github']}/>
                                    </a>

                                    {executive.contact.Other !== "" && (
                                        <a className="Contact"
                                            href={executive.contact.Other} alt="Contact">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                        </a>
                                    )}

                                </div>

                            </div>
                        )}
                </div>
            </div>

        );
        }
    }


    export default About;
