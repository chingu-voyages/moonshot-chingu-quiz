export interface QuizResult {
  date: string;
  numberCorrect: number;
  totalQuestions: number;
  name: string;
  secondsToComplete: number;
}

export interface User {
  uid: number;
  nickname: string;
  email: string;
  data?: {
    quizResults?: QuizResult[]
  };
}