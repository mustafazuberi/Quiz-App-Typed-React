import { useEffect } from "react";
import useQuiz from "./hooks/useQuiz";
import WrongAndCorrectAnswers from "./components/WrongAndCorrectAnswers";
import QuestionAndOptions from "./components/QuestionAndOptions";
import NextAndBack from "./components/NextAndBack";
import Loading from "./components/Loading";

function App() {
  const {
    quizQuestions,
    currentQuestion,
    correctAnswers,
    inCorrectAnswers,
    loading,
    quizCompleted,
    handleOnOptionSelect,
    fetchData,
    handleNext,
    handleBack,
  } = useQuiz();

  useEffect(() => {
    fetchData();
  }, []);
  console.log(quizQuestions);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center min-h-screen flex-col items-center">
      {!quizCompleted ? (
        <div className="quizBox w-[80%] max-w-[500px] flex flex-col gap-y-4">
          {/* Wrong and correct answers */}
          <WrongAndCorrectAnswers
            correctAnswers={correctAnswers}
            inCorrectAnswers={inCorrectAnswers}
          />

          {/* Question and Options */}
          <QuestionAndOptions
            currentQuestion={currentQuestion}
            handleOnOptionSelect={handleOnOptionSelect}
          />

          {/* Next and Back Button */}
          <NextAndBack handleNext={handleNext} handleBack={handleBack} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
