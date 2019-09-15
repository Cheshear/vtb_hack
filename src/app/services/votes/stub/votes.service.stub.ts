import {UserDtoInterface} from "../dto/voter.dto";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {voutersMock} from "./mocks/voters.mock";
import {CreateVoteDtoInterface} from "../dto/create-vote.dto";
import {VoteDtoInterface} from "../dto/user.dto";
import {voteMock} from "./mocks/vote.mock";
import {votesMock} from "./mocks/votes.mock";
import {ShortVoteDtoInterface} from '../dto/short-vote.dto';

export class VotesServiceStub {
  public fetchVoters$(): Observable<UserDtoInterface[]> {
    return of(voutersMock);
  }

  public saveVote$(vote: CreateVoteDtoInterface): Observable<VoteDtoInterface> {
    return of(voteMock);
  }

  public fetchVotes$(): Observable<ShortVoteDtoInterface[]> {
    return of(votesMock);
  }
}
