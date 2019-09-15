import {DocumentDtoInterface} from "../../../services/votes/dto/document.dto";

export interface VoteDescriptionInterface {
  title: string;
  description: string;
  deadline: string;
  documentsLinks?: DocumentDtoInterface[];
}
