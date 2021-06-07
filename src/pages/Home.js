// Import images
import BigBot from "../assets/img/ada-home-bot.png"

// Import assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

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
            className=" mx-auto static p-9 md:p-5 relative"
        >
            {/* Bot image */}
            <img 
                id="home-bot" 
                src={BigBot} alt="Ada's Home Bot waving" 
                className="absolute inset-y-0 right-0 mt-1 z-40 lg:inset-y-0 lg:right-0">
            </img>

            {/* Welcome title */}
            <div 
                id="home-title"
                className="flex flex-col place-items-center inline-block 
                    mt-96 pt-2 z-30"
            >
                <header>
                    <h1 
                        className="font-title text-7xl md:text-blue">
                            ADA'S TEAM
                    </h1>
                    <p 
                        className="font-body italic text-lg">
                            Promoting diversity in STEAM with an emphasis on technology.
                    </p> 
                </header>

            {/* Arrow */}
            <div 
                id="jump-arrow" 
                className="text-5xl py-20"
            >
              <FontAwesomeIcon icon={faArrowDown}/>
            </div>

          </div>

        </div>


        <div 
            id="home-information" 
            className="bg-black w-full px-8 py-2 py-6"
        >
            <h2 
                className="text-2xl"
            >
                COVID 19 UPDATE
            </h2>
            <p 
                className="font-body text-white"
            >
                Due to COVID-19, all Ada's Team events can be assumed to operate in a 
                virtual manner until it's officially deemed safe to host in-person events.
            </p>
            <br /><br />

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



        <div 
            className="p-7"
        >
            
            <div id="subscribe-form">
                <h2 className="lg:hidden">
                    JOIN US
                </h2>
                
                <h2 className="hidden lg:block">
                    Subscribe to our Mailing List
                </h2>

                <p className="hidden lg:block">
                    Join Ada’s Team and receive updates on events, opportunities, scholarships,
                    and more!
                </p>

                <div id="connect-form" className="hidden md:block">
                    <JoinForm />
                </div>

            </div>
            <div className="divider-thick"></div>

            <div id="sponsors-list">
                <h2>
                    SPONSORS
                </h2>
                {/* TODO: add sponsor frames for images */}
                <div className="sponsor"></div>
            </div>

      </div>
    </div>
  );
}

export default Home;
