import { useState } from "react";
import { CurrentQuestion, Question } from "../interfaces";
import { fetchQuizData } from "../api";

const useQuiz = () => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] =
    useState<CurrentQuestion | null>(null);
  const [loading, setLoading] = useState(true);

  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [inCorrectAnswers, setInCorrectAnswers] = useState<number>(0);

  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const questions: Question[] = await fetchQuizData();
      setQuizQuestions(questions);
      setCurrentQuestion({ qIndex: 0, ...questions[0] });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleOnOptionSelect = (
    currentQuestion: CurrentQuestion | null,
    cq: string
  ) => {
    if (currentQuestion) {
      quizQuestions[currentQuestion.qIndex]["userSelected"] = cq;

      // also setting user selected in currect question state
      setCurrentQuestion({ ...currentQuestion, userSelected: cq });
    }
  };

  const handleNext = () => {
    // stopping to go to next if option is no selected
    // setting inccorect and correct answers counting

    if (currentQuestion?.userSelected === currentQuestion?.correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setInCorrectAnswers((prev) => prev + 1);
    }

    // displaying Next Question
    if (currentQuestion?.qIndex !== undefined && currentQuestion?.qIndex <= 9) {
      setCurrentQuestion({
        ...quizQuestions[currentQuestion?.qIndex + 1],
        qIndex: currentQuestion?.qIndex + 1,
      });
    } else {
      setCurrentQuestion(null);
      setQuizCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion?.qIndex) {
      setCurrentQuestion({
        ...quizQuestions[currentQuestion?.qIndex - 1],
        qIndex: currentQuestion?.qIndex - 1,
      });
    }

    // setting old selected answer which user selected
    //  setSelectedOption('')
  };

  return {
    quizQuestions,
    currentQuestion,
    correctAnswers,
    inCorrectAnswers,
    loading,
    quizCompleted,
    fetchData,
    handleNext,
    handleBack,
    handleOnOptionSelect,
  };
};

export default useQuiz;
