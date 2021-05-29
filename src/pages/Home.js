// Import images
import BigBot from "../assets/img/ada-home-bot.png"

// Import assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Typist from 'react-typist';
import { Link } from 'react-scroll';
// Import components
import JoinForm from '../components/JoinForm'



/**
 * Welcome page
 * @returns
 */
function Home() {
  return (
    <div id="home-page">
        <div
            id="home-image"
            className=" mx-auto static p-5 md:p-5 relative animate-fade-in-down" >
            {/* Bot image */}
            <img
                id="home-bot"
                src={BigBot} alt="Ada's Home Bot waving"
                className="absolute inset-y-0 right-0 mt-1 z-40 lg:inset-y-0 lg:right-0 ">
            </img>

            {/* Welcome title */}
            <div
                id="home-title"
                className="flex flex-col place-items-center inline-block
                    mt-72 pt-2 z-30"
            >
                <header>
                    <h4
                        className="font-title text-7xl md:text-blue animate-fade-in-down">
                            ADA'S TEAM
                    </h4>
                    <p
                        className="font-body italic text-lg">
                        <Typist>
                        <Typist.Delay ms={1800}/>
                        Promoting diversity in STEAM with an emphasis on technology.</Typist>

                    </p>
                </header>

            {/* Arrow */}
            <div
                id="jump-arrow"
                className="text-5xl py-20 animate-pulse"
            >
              <Link to="home-information" smooth={true}><FontAwesomeIcon icon={faArrowDown}/></Link>
            </div>

          </div>

        </div>


        <div
            id="home-information"
            className="bg-black w-full px-8 py-2 py-20"
        >

        <div className="md:mx-48 sm:mx-20 lg:mx-62 xl:mx-72">
            <h2
                className="text-2xl"
            >
                COVID 19 UPDATE
            </h2>
            <p
                className="font-body text-white">
                Due to COVID-19, all Ada's Team events can be assumed to operate in a
                virtual manner until it's officially deemed safe to host in-person events.
            </p>
            <br />
            <div className="divider-thick"></div>
            <h2
                className="text-2xl"
            >
                TREATY 6 ACKNOWLEDGEMENT
            </h2>
            <p
                className="text-white"
            >
                We respectfully acknowledge that Ada’s Team is located on Treaty 6 territory, a
                traditional gathering place for diverse Indigenous peoples including the Cree, Blackfoot,
                Metis, Nakota Sioux, Iroquois, Dene, Ojibway/Saulteaux/Anishinaabe, Inuit, and many others
                whose histories, languages, and cultures continue to influence our vibrant community.
            </p>

        </div>
      </div>

        <div
            id="join-us-form"
            className="p-24 animate-fade-in-down"
        >

            <h2 className="px-32">
            Subscribe to our Mailing List
            </h2>
            <span className="px-32">Join Ada’s Team and receive updates on events, opportunities, scholarships, and more!</span>

            <div className="join px-32">  <JoinForm/></div>

            <div id="sponsors-list">
                <h2>
                    SPONSORS
                </h2>

                <div className="sponsor px-16">
                </div>
            </div>

      </div>
    </div>
  );
}

export default Home;
