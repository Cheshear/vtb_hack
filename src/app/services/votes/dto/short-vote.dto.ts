import {UserDtoInterface} from "./user.dto";

export interface ShortVoteDtoInterface {
  id: number;
  title: string;
  creator: UserDtoInterface;
  deadline: string;
}
