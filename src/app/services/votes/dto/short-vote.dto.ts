import {UserDtoInterface} from './voter.dto';

export interface ShortVoteDtoInterface {
  id: number;
  title: string;
  creator: UserDtoInterface;
  deadline: string;
}
