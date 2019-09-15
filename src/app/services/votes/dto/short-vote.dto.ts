import {VoterDtoInterface} from './voter.dto';

export interface ShortVoteDtoInterface {
  id: number;
  title: string;
  creator: VoterDtoInterface;
  deadline: string;
}
