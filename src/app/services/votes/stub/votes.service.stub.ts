import {UserDtoInterface} from "../dto/user.dto";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {voutersMock} from "./mocks/voters.mock";
import {CreateVoteDtoInterface} from "../dto/create-vote.dto";
import {VoteDtoInterface} from "../dto/vote.dto";
import {voteMock} from "./mocks/vote.mock";

export class VotesServiceStub {
  public fetchVoters$(): Observable<UserDtoInterface[]> {
    return of(voutersMock);
  }

  public saveVote$(vote: CreateVoteDtoInterface): Observable<VoteDtoInterface> {
    return of(voteMock);
  }
}
