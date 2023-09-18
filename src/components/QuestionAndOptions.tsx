import { CurrentQuestion } from "../interfaces";

interface props {
  currentQuestion: CurrentQuestion | null;
  handleOnOptionSelect: (
    currentQuestion: CurrentQuestion | null,
    cq: string
  ) => void;
}

const QuestionAndOptions = ({
  currentQuestion,
  handleOnOptionSelect,
}: props) => {
  return (
    <>
      <div>
        <h2>
          Question{" "}
          {currentQuestion?.qIndex !== undefined
            ? currentQuestion?.qIndex + 1
            : ""}
          :- {currentQuestion?.question}
        </h2>
        <div className="flex flex-col">
          {currentQuestion?.options?.map((cq) => (
            <div className="flex flex-row gap-x-4" key={cq}>
              <input
                type="radio"
                name={currentQuestion.question}
                value={currentQuestion?.userSelected}
                id={cq}
                onChange={() => handleOnOptionSelect(currentQuestion, cq)}
              />
              <label htmlFor={cq}>{cq}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionAndOptions;
