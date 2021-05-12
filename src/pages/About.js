//Import data files
// import initiatives from "../_data/initiatives.json";
// import executives from "../_data/executives.json";


// Import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


// Import initiative assets
import dev_image from "../assets/img/ada_bot_scarf.png";
import student_image from "../assets/img/ada_bot_sleepy.png";
import mentor_image from "../assets/img/ada_bot_hands_up.png";
import podcast_image from "../assets/img/ada_bot_hat1.png";

import { render } from '@testing-library/react';
import React from 'react';
import db from "../firebase";


class About extends React.Component {
  state = {
    executives: null,
    initiatives: null
  }

  componentDidMount() {
    const initiatives = []
    const executives = []

    console.log("mounted")
    db.collection("executives").get()
    .then( snapshot => {
      snapshot.forEach( doc => {
        const data = doc.data()
        executives.push(data)

      })
      this.setState({ executives: executives })
      console.log(executives)
    })
    .catch( error => console.log(error))

    db.collection("initiatives").get()
    .then( snapshot => {
     

      snapshot.forEach( doc => {
        const data = doc.data()
        initiatives.push(data)

      })
      
      this.setState( {initiatives : initiatives} )
      console.log("hey")
      console.log(initiatives)
    }).catch( error => console.log(error))
  }
  
  render() {
    library.add(fab, faEnvelope); //importing brand icons for social-media
    const images = [dev_image, student_image, mentor_image, podcast_image];
    return (
      <div className="page">
      <div className="page-title" className="text-center my-12">
        <h1>About</h1>
        <h3>Learn more about Ada's Team.</h3>
      </div>

      <div id="about-goal" className="my-6 mb-8">
        <p className="text-base">
          In Ada's Team, our goal is to <b>promote diversity in computing science, games, technology, engineering, and
          mathematics.</b> By diversity, we include but are not limited to the following categories:
          gender, race, ethnicity, religion, ability, sexuality, social class, and any other factor
          of discrimination or minority group. <br /> 
          <b>We embrace and celebrate your differences, striving
          to foster an inclusive culture and safe space for everyone to collaborate and thrive in.</b>
        </p>
      </div>

      


      <div id="initiatives" className="p-3">
        <h2 className="text-blue">OUR INITIATIVES</h2>
        {this.state.initiatives && 
        this.state.initiatives.map((initiative, i) => (
          <div className="initiative">
            <h3 className="font-title text-2xl">{initiative["name"]}</h3>
            <div className="">
              {initiative["image"] !== "" && <img src={images[i]} alt="adas-team-bot" 
                className="h-40 w-28" />}
            </div>
            <div className="description">
              <p>{initiative["description"]}</p>
            </div>

        <div className="py-6">
          {initiatives.map((initiative, i) => (

            <div className="initiative-info">
              <h3 className="font-title text-2xl">{initiative["name"]}</h3>
                {initiative["image"] !== "" && <img src={images[i]} alt="adas-team-bot" 
                  className="h-40 w-28" />}
              </div>
              <div className="description">
                <p>{initiative["description"]}</p>
            </div>

              <div className="initiative-social-media" className="my-2 space-x-4">
                {initiative["contact"]["instagram"] !== "" && (
                  <a href={initiative["contact"]["instagram"]} className="text-3xl">
                    <FontAwesomeIcon icon={['fab', 'instagram']}/>
                  </a>)}
                {initiative["contact"]["email"] !== "" && (
                  <a href={initiative["contact"]["email"]} className="text-3xl">
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </a>)}
              </div>
              
        </div>
          ))}
      </div>
        
      </div>

      <div id="the-team">
        <div className="title">
          <h2 className="text-blue text-3xl">MEET THE TEAM</h2>
          <h3 className="font-title text-pink text-2xl">2020-2021</h3>
        </div>

        {this.state.executives &&
        this.state.executives.map((executive) => (
          <div id="executives" className="bg-light-blue p-3 shadow-md rounded-lg my-4">
            <div className="image">{executive["image"] !== "" && executive["image"]}</div>
            <div className="">
              <div className="name">
                <h4 className="font-title">{executive["name"]}</h4>
              </div>
              <div id="executive-role" className="mb-2">
                <p>
                  <em>{executive["role"]}</em>
                </p>
              </div>
              <div id="executive-description">
                <p>{executive["description"]}</p>
              </div>
            </div>

            <div className="my-2 space-x-4 text-3xl">
              <a 
                href={executive.contact.LinkedIn}> 
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a href={executive.contact.Github} alt="Github">
                <FontAwesomeIcon icon={['fab', 'github']}/> 
              </a>
              {executive.contact.Other !== "" && (
                <a className="Contact" href={executive.contact.Other} alt="Contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              )}
              <br />
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
  }
}

// function About() {
//   library.add(fab, faEnvelope); //importing brand icons for social-media
//   const images = [dev_image, student_image, mentor_image, podcast_image];


//   return (
//     <div className="page">
//       <div className="page-title" className="text-center my-12">
//         <h1>About</h1>
//         <h3>Learn more about Ada's Team.</h3>
//       </div>

//       <div id="about-goal" className="my-6 mb-8">
//         <p className="text-base">
//           In Ada's Team, our goal is to <b>promote diversity in computing science, games, technology, engineering, and
//           mathematics.</b> By diversity, we include but are not limited to the following categories:
//           gender, race, ethnicity, religion, ability, sexuality, social class, and any other factor
//           of discrimination or minority group. <br /> 
//           <b>We embrace and celebrate your differences, striving
//           to foster an inclusive culture and safe space for everyone to collaborate and thrive in.</b>
//         </p>
//       </div>


//       <div id="initiatives" className="container flex flex-wrap p-3">
//         <h2 className="text-blue">OUR INITIATIVES</h2>
//         {initiatives.map((initiative, i) => (
//           <div className="initiative">
//             <h3 className="font-title text-2xl">{initiative["name"]}</h3>
//             <div className="">
//               {initiative["image"] !== "" && <img src={images[i]} alt="adas-team-bot" 
//                 className="h-40 w-28" />}
//             </div>
//             <div className="description">
//               <p>{initiative["description"]}</p>
//             </div>

//             <div className="my-2 space-x-4">
//               {initiative["contact"]["instagram"] !== "" && (
//                 <a href={initiative["contact"]["instagram"]} className="text-3xl">
//                   <FontAwesomeIcon icon={['fab', 'instagram']}/>
//                 </a>)
//               }
//               {initiative["contact"]["email"] !== "" && (
//                 <a href={initiative["contact"]["email"]} className="text-3xl">
//                   <FontAwesomeIcon icon={faEnvelope}/>
//                 </a>)
//               }
//             </div>
//             <br />
//           </div>
//         ))}
//       </div>

//       <div id="the-team">
//         <div className="title">
//           <h2 className="text-blue text-3xl">MEET THE TEAM</h2>
//           <h3 className="font-title text-pink text-2xl">2020-2021</h3>
//         </div>

//         {executives.map((executive, i) => (
//           <div id="executives" className="bg-light-blue p-3 shadow-md rounded-lg my-4">
//             <div className="image">{executive["image"] !== "" && executive["image"]}</div>
//             <div className="">
//               <div className="name">
//                 <h4 className="font-title">{executive["name"]}</h4>
//               </div>
//               <div id="executive-role" className="mb-2">
//                 <p>
//                   <em>{executive["role"]}</em>
//                 </p>
//               </div>
//               <div id="executive-description">
//                 <p>{executive["description"]}</p>
//               </div>
//             </div>

//             <div className="my-2 space-x-4 text-3xl">
//               <a 
//                 href={executive.contact.LinkedIn}> 
//                 <FontAwesomeIcon icon={['fab', 'linkedin']} />
//               </a>
//               <a href={executive.contact.Github} alt="Github">
//                 <FontAwesomeIcon icon={['fab', 'github']}/> 
//               </a>
//               {executive.contact.Other !== "" && (
//                 <a className="Contact" src={email} href={executive.contact.Other} alt="Contact">
//                   <FontAwesomeIcon icon={faEnvelope} />
//                 </a>
//               )}
//               <br />
//             </div>
//             <br />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default About;
