import {UserDtoInterface} from "./user.dto";

export interface AnswerDtoInterface {
  id: number;
  answer: boolean;
  comment: string;
  voter: UserDtoInterface;
}
