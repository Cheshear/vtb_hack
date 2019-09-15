import {VoterDtoInterface} from "./voter.dto";

export interface AnswerDtoInterface {
  id: number;
  answer: boolean;
  comment: string;
  voter: VoterDtoInterface;
}
