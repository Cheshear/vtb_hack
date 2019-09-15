import { Injectable } from '@angular/core';
import {BackendService} from "../backend/backend.service";
import {REST_API_URLS} from "../../config/REST_API_URLS";
import {Observable} from "rxjs/Observable";
import {VoterDtoInterface} from "./dto/voter.dto";
import {CreateVoteDtoInterface} from "./dto/create-vote.dto";
import {VoteDtoInterface} from "./dto/vote.dto";

@Injectable()
export class VotesService {
  constructor(private backendService: BackendService) {}

  public fetchVoters$(): Observable<VoterDtoInterface[]> {
    return this.backendService.get(REST_API_URLS.ALL_VOTERS_LIST);
  }

  public saveVote$(vote: CreateVoteDtoInterface): Observable<VoteDtoInterface> {
    return this.backendService.post(REST_API_URLS.SAVE_VOTE, vote);
  }
}
