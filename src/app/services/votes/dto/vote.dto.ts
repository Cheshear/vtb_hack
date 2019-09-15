import {UserDtoInterface} from "./user.dto";
import {DocumentDtoInterface} from "./document.dto";
import {QuestionDtoInterface} from "./question.dto";

export interface VoteDtoInterface {
  id: number;
  title: string;
  description: string;
  deadline: string;
  createdBy: UserDtoInterface;
  questions: QuestionDtoInterface[];
  voters: UserDtoInterface[];
  documentsLinks?: DocumentDtoInterface[];
}
