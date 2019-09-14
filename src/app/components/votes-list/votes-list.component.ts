import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
