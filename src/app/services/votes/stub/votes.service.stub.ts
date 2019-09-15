import {VoterDtoInterface} from "../dto/voter.dto";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {voutersMock} from "./mocks/voters.mock";
import {votesMock} from "./mocks/votes.mock";
import {ShortVoteDtoInterface} from '../dto/short-vote.dto';

export class VotesServiceStub {
  public fetchVoters$(): Observable<VoterDtoInterface[]> {
    return of(voutersMock);
  }

  public fetchVotes$(): Observable<ShortVoteDtoInterface[]> {
    return of(votesMock);
  }
}

