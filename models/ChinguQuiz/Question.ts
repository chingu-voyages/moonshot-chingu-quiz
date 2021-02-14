import type { Answer } from "./Answer";

export interface Question {
  id: string;
  prompt: string;
  answers: Answer[];
}
