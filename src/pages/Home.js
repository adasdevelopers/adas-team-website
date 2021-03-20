import BigBot from "../assets/img/ada-home-bot.png"

function Home() {
  return (
    <div>
      {/* <script type="text/javascript" src="../assets/js/slow_text_type"></script> */}

        <div id="main-title" className="p-7">
          
          <img id="home-bot" src={BigBot} className="absolute inset-y-0 right-0 pt-8"></img>
          <div className="pt-40">
            <h1 className="font-title text-7xl md:text-5xl">ADA'S TEAM</h1>
            <p className="font-body italic text-lg">
                Promoting diversity in STEAM with an emphasis on technology.</p> 
          </div>

        </div>
        {/* <div className="ada-big"></div> */}



      <div className="bg-black px-8 py-6">
        <h2 className="font-title text-blue">COVID 19 UPDATE</h2>
        <p className="font-body text-white">
          Due to COVID-19, all Ada's Team events can be assumed to operate in a virtual manner until
          it's officially deemed safe to host in-person events.
        </p>
        <br /><br /><br />

        <h2 className="font-title text-blue">TREATY 6 ACKNOWLEDGEMENT</h2>
        <p className="font-body text-white">
          We respectfully acknowledge that Ada’s Team is located on Treaty 6 territory, a
          traditional gathering place for diverse Indigenous peoples including the Cree, Blackfoot,
          Metis, Nakota Sioux, Iroquois, Dene, Ojibway/Saulteaux/Anishinaabe, Inuit, and many others
          whose histories, languages, and cultures continue to influence our vibrant community.
        </p>
      </div>

      <div>
        <h2 className="font-title text-blue">JOIN US</h2>
        <div className="join"></div>
        <h2 className="font-title text-blue">SPONSORS</h2>
        <div className="sponsor"></div>
      </div>
    </div>
  );
}

export default Home;
