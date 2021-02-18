import { db } from "../firebase";

db.collection("job-postings")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

function JobBoard() {
  return (
    <div>
      <h1>Job Board</h1>
    </div>
  );
}

export default JobBoard;
