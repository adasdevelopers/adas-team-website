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

AOS.init({
  easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

function Home() {

  const sponsors = [
		{
			company: "Intuit",
			image: "https://i.pinimg.com/originals/7f/10/58/7f1058153c8d23968a1778794512ea3e.jpg",
		},
		{
			company: "Dotdash",
			image: "https://i.pinimg.com/originals/18/bb/0e/18bb0eb7190e7f956790031404849834.jpg",
		},
		{
			company: "Startup Edmonton",
			image: "https://i.pinimg.com/originals/18/bb/0e/18bb0eb7190e7f956790031404849834.jpg",
		},
		{
			company: "Scotiabank",
			image:
				"https://64.media.tumblr.com/347da48af495e97bd49ae19b1b9823d0/2224fb45ec99743a-23/s400x600/f2bd461b58e4735610901a845fc2724fd6e7641c.jpg",
		},
		{
			company: "Jobber",
			image:
				"https://64.media.tumblr.com/2b0a9f33bb8bcd58dffb8c09d9d6ec10/7ae78fc22ff92b2e-81/s640x960/82b48eadeab117eb2c276079b6bf2e1702f011ac.jpg",
		},
		{
			company: "Deepmind",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaKDzEY40Au7ggR4u9anmsLz-RivJG5Sotg&usqp=CAU",
		},
	];

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


        <div
            id="join-us-form"
            className="lg:mx-24 mt-10 mx-5"
        >

        <div data-aos="fade-in" data-aos-duration="900" data-aos-delay="500"
   data-aos-easing="ease-in-sine">
            <h2 className="mx-10">
            Subscribe to our Mailing List
            </h2>
            <div className="mx-10">Join Ada’s Team and receive updates on events, opportunities, scholarships, and more!</div>
            </div>
            <div className="join md:mx-24 sm:mx-8 my-8">  <JoinForm/></div>


            </div>


            <br/>

              <div id="sponsors-list" className="lg:mx-32 md:mx-16 sm:mx-8 mb-16 ml-2">
              <div className="divider-thick"></div>

                <h2>
                    SPONSORS
                </h2>
                <div data-aos="fade-in" data-aos-duration="900" data-aos-delay="500"
           data-aos-easing="ease-in-sine">

                    <div class="grid md:grid-cols-3 md:gap-4 sm:grid-cols-2 grid-cols-2 ">
                  {sponsors.map(({ company, image }) => (
                  <Sponsor company={company} image={image} />
                  ))}
                    </div>
                </div>
          </div>
        </div>

  );
}
const Sponsor = ({ company, image }) => (
<div className="w-max flex flex-col item-center">
<img src={image} className="image--cover" />
<h4 className="text-lg text-center uppercase">{company}</h4>
</div>
);



export default Home;
