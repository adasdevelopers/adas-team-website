import questions from "../_data/questions.json";

function FAQ() {
  return (
    <div id="faq-content">
      <div class="page-heading">
        <div class="big-logo-faq"></div>
        <h1>FAQ</h1>
        <h2>Answering your most frequently asked questions</h2>
      </div>

      <div id="questions">
        {questions.map((question, i) => {
          if (i % 2 == 0) {
            return (
              <div id={`q${i}`} className="left-question">
                <h2>{question["question"]}</h2>
                <h3>{question["answer"]}</h3>
              </div>
            );
          } else {
            return (
              <div id={`q${i}`} className="right-question">
                <h2>{question["question"]}</h2>
                <h3>{question["answer"]}</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FAQ;
