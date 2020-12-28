import type { Answer } from "./Answer";

export interface Question {
  prompt: string;
  answers: Answer[];
}
