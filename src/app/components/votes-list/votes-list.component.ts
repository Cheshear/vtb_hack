import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Vote, votes} from './votes-list.component.spec';

@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotesListComponent implements OnInit {
  votes = votes;
  vote = this.votes[0];
  constructor() { }


  ngOnInit() {
  }

  trackById(index: number, vote: Vote): number { return vote.id; }
}
