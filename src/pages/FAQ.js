import questions from "../_data/questions.json";

function FAQ() {
  return (
    <div className="page">
      <div className="page-title">
        <h1>FAQ</h1>
        <h3>Answering your most frequently asked questions</h3>
      </div>

      <div id="questions">
        {questions.map((question, i) => {
          if (i % 2 == 0) {
            return (
              <div id={`q${i}`} className="left-question">
                <h4>{question["question"]}</h4>
                <p>{question["answer"]}</p>
                <div className="divider-thin"></div>
              </div>
              
            );
          } else {
            return (
              <div id={`q${i}`} className="right-question">
                <h4>{question["question"]}</h4>
                <p>{question["answer"]}</p>
                <div className="divider-thin"></div>
              </div>
            );
          }
        })}
        
      </div>
    </div>
  );
}

export default FAQ;
