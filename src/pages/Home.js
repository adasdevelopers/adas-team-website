// Import images
import BigBot from "../assets/img/ada-home-bot.png"

// Import assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import JoinForm from '../components/JoinForm'
import Header from '../components/Header'



/**
 * Welcome page
 * @returns
 */

AOS.init();

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
                    mt-72 pt-2 z-30">
                <Header title="ADA'S TEAM" homepage="true" subtitle="Promoting diversity in STEAM with an emphasis on technology."/>

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

            <div data-aos="fade-right" data-aos-duration="900"
     data-aos-easing="ease-in-sine">
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
            </div>
            <br />
            <div className="divider-thick"></div>


            <div data-aos="fade-left" data-aos-duration="900"
       data-aos-easing="ease-in-sine">
            <h2>
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
      </div>

      <div data-aos="fade-in" data-aos-duration="900" data-aos-delay="500"
 data-aos-easing="ease-in-sine">
        <div
            id="join-us-form"
            className="md:p-24"
        >

            <h2 className="md:px-32 sm:mx-8">
            Subscribe to our Mailing List
            </h2>
            <span className="md:px-32 sm:mx-8">Join Ada’s Team and receive updates on events, opportunities, scholarships, and more!</span>

            <div className="join md:mx-32 sm:mx-8">  <JoinForm/></div>


            </div>
            </div>

            <br/>

              <div id="sponsors-list" className="mx-32 mb-32">
              <div className="divider-thick"></div>
                <h2>
                    SPONSORS
                </h2>
                {/** main flex box wrapper **/}
                <div className="wrapper my-10 mx-18">

                {/** divs within flex box **/}
                <div className="w-60 h-30 m-8">
                <img src="https://i.pinimg.com/originals/7f/10/58/7f1058153c8d23968a1778794512ea3e.jpg" className="image--cover "/>
                <h4 className="text-lg mx-10 my-8">INTUIT</h4>
                </div>


                <div className="w-60 h-40 m-10">
                <img src="https://i.pinimg.com/originals/18/bb/0e/18bb0eb7190e7f956790031404849834.jpg" className="image--cover "/>
                <h4 className="text-lg text-center m-5">DOTDASH</h4>
                </div>

                  <div className="w-60 h-40 m-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2ASvjczznm6jREHfFGzl_AM7Codo-42B6A&usqp=CAU" className="image--cover "/>
                <h4 className="text-lg text-center m-5">STARTUP EDMONTON</h4>
                </div>

                <div className="w-60 h-40 m-10">
                <img src="https://64.media.tumblr.com/347da48af495e97bd49ae19b1b9823d0/2224fb45ec99743a-23/s400x600/f2bd461b58e4735610901a845fc2724fd6e7641c.jpg" className="image--cover "/>
                <h4 className="text-lg mx-10 my-8">SCOTIABANK</h4>
                </div>

                <div className="w-60 h-40 m-10">
                <img src="https://64.media.tumblr.com/2b0a9f33bb8bcd58dffb8c09d9d6ec10/7ae78fc22ff92b2e-81/s640x960/82b48eadeab117eb2c276079b6bf2e1702f011ac.jpg" className="image--cover "/>
                <h4 className="text-lg mx-10 my-8">JOBBER</h4>
                </div>


                <div className="w-60 h-40 m-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaKDzEY40Au7ggR4u9anmsLz-RivJG5Sotg&usqp=CAU" className="image--cover "/>
                <h4 className="text-lg mx-10 my-8 ">DEEPMIND</h4>
                </div>



                 </div>


            </div>
      </div>
  );
}

export default Home;
