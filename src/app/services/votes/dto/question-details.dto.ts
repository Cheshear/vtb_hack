import {AnswerDtoInterface} from "./answer.dto";

export interface QuestionDetailsDtoInterface {
  text: string;
  answers: AnswerDtoInterface[];
}
