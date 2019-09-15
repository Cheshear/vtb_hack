import {ShortVoteDtoInterface} from "./short-vote.dto";

export interface CreateVoteDtoInterface {
  title: string;
  description: string;
  deadline: string;
  questions: string[];
  voters: ShortVoteDtoInterface[];
}
