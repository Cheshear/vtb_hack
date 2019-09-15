import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {map, switchMap} from "rxjs/operators";
import {Subscription} from "rxjs/Subscription";
import {QuestionDetailsDtoInterface} from "../../../services/votes/dto/question-details.dto";
import {VotesService} from "../../../services/votes/votes.service";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {VoutingPopupComponent} from "../vouting-popup/vouting-popup.component";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueComponent implements OnInit, OnDestroy {
  public issueId: number;
  public questionDetails: QuestionDetailsDtoInterface;
  private issueSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private votesService: VotesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.issueId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchIssue();
  }

  ngOnDestroy() {
    this.issueSubscription.unsubscribe();
  }

  public fetchIssue(): void {
    this.votesService.fetchAnswers$(this.issueId)
      .subscribe((issue: QuestionDetailsDtoInterface) => this.questionDetails = issue);
  }

  public openVotePopup(): void {
    const config = new MatDialogConfig();
    config.id = `${this.issueId}`;
    this.dialog.open(VoutingPopupComponent, config);
  }
}
