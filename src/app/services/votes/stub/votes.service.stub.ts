import {UserDtoInterface} from "../dto/user.dto";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {voutersMock} from "./mocks/voters.mock";
import {CreateVoteDtoInterface} from "../dto/create-vote.dto";
import {VoteDtoInterface} from "../dto/vote.dto";
import {voteMock} from "./mocks/vote.mock";
import {votesMock} from "./mocks/votes.mock";
import {ShortVoteDtoInterface} from '../dto/short-vote.dto';
import {QuestionDetailsDtoInterface} from "../dto/question-details.dto";
import {questionsDetailsMock} from "./mocks/question-details.mock";
import {CreateAnswerDtoInterface} from "../dto/create-answer.dto";
import {AnswerDtoInterface} from "../dto/answer.dto";

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

  public fetchVoteById$(id: number): Observable<VoteDtoInterface> {
    return of(voteMock);
  }

  public fetchAnswers$(questionId: number): Observable<QuestionDetailsDtoInterface> {
    return of(questionsDetailsMock);
  }

  public postAnswer$(createdAnswer: CreateAnswerDtoInterface): Observable<AnswerDtoInterface> {
    return of({
      id: 58634,
      answer: true,
      comment: 'ghdkg',
      voter: {
      id: 527663,
        firstName: 'Алексей',
        lastName: 'Иванов',
        middleName: 'Иванович',
        position: 'Начальник',
        subdivision: {
        id: 2475,
          name: 'отдел кадров',
      },
    }
    });
  }
}
