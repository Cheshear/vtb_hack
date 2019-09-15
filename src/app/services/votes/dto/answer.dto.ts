import {UserDtoInterface} from "./voter.dto";

export interface AnswerDtoInterface {
  id: number;
  answer: boolean;
  comment: string;
  voter: UserDtoInterface;
}
