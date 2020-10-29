import type { Question } from "./Question";

export interface Quiz {
  id: number;
  subject: string[];
  description: string;
  tags: string[];
  title: string;
  questions?: Question[];
}
