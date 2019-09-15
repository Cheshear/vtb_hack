import { Component, OnInit } from '@angular/core';
import {VotesService} from "../../services/votes/votes.service";
import {ActivatedRoute} from "@angular/router";
import {VoteDtoInterface} from "../../services/votes/dto/vote.dto";
import {Subscription} from "rxjs/Subscription";
import {VoteDescriptionInterface} from "./models/vote-description.interface";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  public vote: VoteDtoInterface;
  public voteDescription: VoteDescriptionInterface;
  private voteId: number;
  private voteSubscription: Subscription;

  constructor(private voteService: VotesService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.voteId = +this.activateRoute.snapshot.paramMap.get('id');
    this.voteSubscription = this.voteService.fetchVoteById$(this.voteId).subscribe((vote: VoteDtoInterface) => {
      this.vote = vote;
    });
    const {title, description, deadline, documentsLinks } = this.vote;
    this.voteDescription = { title, description, deadline, documentsLinks };
  }

}
