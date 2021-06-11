// Import libraries
import React, {useState} from 'react';

function JoinForm() {
      const [email, setEmail] = useState("")
      const [first, setFirst] = useState("")
      const [last,setLast] = useState("")
      const [faculty, setFaculty] = useState("")
      const [studentAff, setStudentAff] = useState("")

      // function subscribe(event) {
      //     event.preventDefault();
      //     fetch("https://adasteam.us18.list-manage.com/subscribe/post?u=9d8e6ca3c4618877981922611&amp;id=8ac3f17ed3",
      //     { method: 'post',
      //       mode: 'no-cors',
      //       body: {'EMAIL': email, 'FNAME':first, 'LNAME':last, 'MMERGE4':faculty, 'MMERGE3':studentAff},
      //       headers: {Accept:'application/json'}
      //     })
      //     .then(() => {
      //       console.log('success');
      //     });
      //   }


        // "https://adasteam.us18.list-manage.com/subscribe/post?u=9d8e6ca3c4618877981922611&amp;id=8ac3f17ed3"

    return (
        <div
            id="connect-form"
            className="bg-light-blue p-5 rounded-lg my-7">
            <form action="https://adasteam.us18.list-manage.com/subscribe/post" noValidate className="grid grid-cols-1 gap-3 justify-items-stretch lg:grid-cols-2 lg:mx-20 lg:my-6">
               <input type="hidden" name="u" value="9d8e6ca3c4618877981922611"/>
             <input type="hidden" name="id" value="8ac3f17ed3"/>
                <div className="col-span-2">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="form-email"
                        type="email"
                        name="EMAIL"
                        className="focus:outline-none focus:ring focus:border-blue-50 px-2"
                        value={email}
                        onChange={(e)=> {setEmail(e.target.value)}}
                        />

                </div>

                <div>
                    <label htmlFor="name">
                        First Name
                    </label>
                    <input
                        id="form-first-name"
                        type="name"
                        name="FNAME"
                        className="focus:outline-none focus:ring focus:border-blue-50 px-2"
                        value={first}
                        onChange={(e)=> {setFirst(e.target.value)}}/>
                </div>

                <div>
                    <label htmlFor="name">
                        Last Name
                    </label>
                    <input
                        id="form-last-name"
                        type="name"
                        name="LNAME"
                        className="focus:outline-none focus:ring focus:border-blue-50 px-2"
                        value={last}
                        onChange={(e)=> {setLast(e.target.value)}}/>
                </div>

                <div>
                    <label htmlFor="name">
                        Student Affiliation
                    </label>
                    <input
                        id="form-student-group"
                        type="name"
                        name="MMERGE3"
                        className="focus:outline-none focus:ring focus:border-blue-50 px-2" value={studentAff}
onChange={(e)=> {setStudentAff(e.target.value)}}/>
                </div>

                <div>
                    <label htmlFor="name">
                        Faculty
                    </label>
                    <input
                        id="form-faculty"
                        type="name"
                        name="MMERGE4"
                        className="focus:outline-none focus:ring focus:border-blue-50 px-2" value={faculty}
onChange={(e)=> {setFaculty(e.target.value)}}/>
                </div>


                <button
                    type="submit"
                    className="w-5/6 justify-self-center col-span-2 lg:w-2/5 active:bg-blue-700">
                    SUBSCRIBE
                </button>
            </form>

        </div>
    );

}

export default JoinForm;
