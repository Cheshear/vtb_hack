import { Injectable } from '@angular/core';
import {BackendService} from "../backend/backend.service";
import {REST_API_URLS} from "../../config/REST_API_URLS";
import {Observable} from "rxjs/Observable";
import {UserDtoInterface} from "./dto/user.dto";
import {CreateVoteDtoInterface} from "./dto/create-vote.dto";
import {VoteDtoInterface} from "./dto/vote.dto";
import {ShortVoteDtoInterface} from './dto/short-vote.dto';
import {AnswerDtoInterface} from "./dto/answer.dto";
import {CreateAnswerDtoInterface} from "./dto/create-answer.dto";
import {QuestionDetailsDtoInterface} from "./dto/question-details.dto";

@Injectable()
export class VotesService {
  constructor(private backendService: BackendService) {}

  public fetchVoters$(): Observable<UserDtoInterface[]> {
    return this.backendService.get(REST_API_URLS.ALL_VOTERS_LIST);
  }

  public saveVote$(vote: CreateVoteDtoInterface): Observable<VoteDtoInterface> {
    return this.backendService.post(REST_API_URLS.SAVE_VOTE, vote);
  }

  public fetchVoteById$(id: number): Observable<VoteDtoInterface> {
    return this.backendService.get(REST_API_URLS.GET_VOTE(id));
  }

  public fetchAnswers$(questionId: number): Observable<QuestionDetailsDtoInterface> {
    return this.backendService.get(REST_API_URLS.GET_ANSWERS(questionId));
  }

  public postAnswer$(createdAnswer: CreateAnswerDtoInterface): Observable<AnswerDtoInterface> {
    return this.backendService.post(REST_API_URLS.POST_ANSWER, createdAnswer);
  }

  public fetchVotes$(): Observable<ShortVoteDtoInterface[]> {
    return this.backendService.get(REST_API_URLS.VOTES_LIST);
  }
}
