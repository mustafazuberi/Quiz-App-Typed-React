export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options : string[]
  userSelected : string
}

export interface QuizData {
  response_code: number;
  results: Question[];
}

export interface CurrentQuestion extends Question {
  qIndex: number;
}
