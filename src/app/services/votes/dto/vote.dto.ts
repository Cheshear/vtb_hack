import {VoterDtoInterface} from "./voter.dto";
import {DocumentDtoInterface} from "./document.dto";
import {QuestionDtoInterface} from "./question.dto";

export interface VoteDtoInterface {
  id: number;
  title: string;
  description: string;
  deadline: string;
  questions: QuestionDtoInterface[];
  voters: VoterDtoInterface[];
  documentsLinks?: DocumentDtoInterface[];
}
