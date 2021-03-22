import { jobs } from "../firebase";

const temp = JSON.stringify(jobs.company);
console.log(temp);

function JobBoard() {
  return (
    <div>
      <h1>Job Board</h1>
      <p>
         {/* { temp } */}
      </p>
    </div>
  );
}

export default JobBoard;
