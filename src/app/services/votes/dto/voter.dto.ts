import {SubdivisionDtoInterface} from "./subdivision.dto";

export interface VoterDtoInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  position: string;
  subdivision: SubdivisionDtoInterface;
}
