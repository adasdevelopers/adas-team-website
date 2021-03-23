import BigBot from "../assets/img/ada-home-bot.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



function Home() {
  return (
    <div>
        <div id="home-title" className="container mx-auto static p-7">
          <img id="home-bot" src={BigBot} alt="Ada's Home Bot" 
                className="absolute inset-y-0 right-0 mt-20 z-0"></img>
          <div className="inline-block mt-96 pt-2">
            <h1 className="font-title text-7xl md:text-5xl">ADA'S TEAM</h1>
            <p className="font-body italic text-lg">
                Promoting diversity in STEAM with an emphasis on technology.</p> 
          </div>
          
        </div>

        {/* <div>
          <FontAwesomeIcon icon={faArrowDown} />
        </div> */}
     

        <div id="home-information" className="bg-black w-full px-8 py-2 py-6">
          <h2 className="font-title text-blue text-2xl">COVID 19 UPDATE</h2>
          <p className="font-body text-white">
            Due to COVID-19, all Ada's Team events can be assumed to operate in a virtual manner until
            it's officially deemed safe to host in-person events.
          </p>
          <br /><br />

          <h2 className="font-title text-blue text-2xl">TREATY 6 ACKNOWLEDGEMENT</h2>
          <p className="font-body text-white">
            We respectfully acknowledge that Ada’s Team is located on Treaty 6 territory, a
            traditional gathering place for diverse Indigenous peoples including the Cree, Blackfoot,
            Metis, Nakota Sioux, Iroquois, Dene, Ojibway/Saulteaux/Anishinaabe, Inuit, and many others
            whose histories, languages, and cultures continue to influence our vibrant community.
          </p>
        </div>



      <div id="join-us-form" className="p-7">
        <h2 className="font-title text-blue text-2xl">JOIN US</h2>
        <div className="join"></div>
      <div id="sponsors-list">
        <h2 className="font-title text-blue text-2xl">SPONSORS</h2>
        <div className="sponsor"></div>
      </div>

      </div>
    </div>
  );
}

export default Home;
