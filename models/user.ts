export interface QuizResult {
  date: string;
  score: number;
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