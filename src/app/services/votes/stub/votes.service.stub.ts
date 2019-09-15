import {VoterDtoInterface} from "../dto/voter.dto";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {voutersMock} from "./mocks/voters.mock";

export class VotesServiceStub {
  public fetchVoters$(): Observable<VoterDtoInterface[]> {
    return of(voutersMock);
  }
}
