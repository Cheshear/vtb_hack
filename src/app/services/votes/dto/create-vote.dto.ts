import {BaseVoteDtoInterface} from "./base-vote.dto";

export interface CreateVoteDtoInterface {
  title: string;
  description: string;
  deadline: string;
  questions: string[];
  voters: BaseVoteDtoInterface[];
}
