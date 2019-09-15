import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Vote} from './votes-list.component.spec';
import {VotesService} from '../../services/votes/votes.service';
import {ShortVoteDtoInterface} from '../../services/votes/dto/short-vote.dto';
import {Observable} from 'rxjs/Observable';
import {VotesServiceStub} from '../../services/votes/stub/votes.service.stub';
import {Router} from '@angular/router';

@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotesListComponent implements OnInit {
  public votes: Observable<ShortVoteDtoInterface[]>;

  constructor(public votesService: VotesServiceStub, private router: Router) { }
  ngOnInit() {
    this.votes = this.getShortVotes$();
  }

  public navigateToVote(vote_id: number): void {
    this.router.navigate(['votes-list', `${vote_id}`]);
  }

  private getShortVotes$(): Observable<ShortVoteDtoInterface[]> {
    return this.votesService.fetchVotes$();
  }
  trackById(index: number, vote: Vote): number { return vote.id; }
}
