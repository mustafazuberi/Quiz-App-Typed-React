import { Question, QuizData } from "./interfaces";

const getOptions = (
  correct_answer: string,
  incorrect_answers: string[]
): string[] => {
  const randomIndex = Math.floor(Math.random() * 4);
  let options: string[] = incorrect_answers.map((a) => {
    return decodeURIComponent(a);
  });
  options.splice(randomIndex, 0, decodeURIComponent(correct_answer));
  return options;
};

export const fetchQuizData = async (): Promise<Question[]> => {
  try {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986"
    );
    if (!res.ok) {
      throw new Error("API request failed");
    }
    const data: QuizData = await res.json();
    const questions = data.results.map((item) => {
      return {
        ...item,
        question: decodeURIComponent(item.question),
        category: decodeURIComponent(item.category),
        userSelected: "",
        correct_answer: decodeURIComponent(item.correct_answer),
        options: getOptions(item.correct_answer, item.incorrect_answers),
        incorrect_answers: item.incorrect_answers.map((item) =>
          decodeURIComponent(item)
        ),
      };
    });
    return questions;
  } catch (error) {
    
    throw new Error("Failed to fetch quiz data");
  }
};
