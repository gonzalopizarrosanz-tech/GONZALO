
export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export enum GameState {
  Start,
  Playing,
  Finished
}
