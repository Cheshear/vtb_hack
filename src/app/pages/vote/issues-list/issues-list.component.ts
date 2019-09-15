import {Component, Input, OnInit} from '@angular/core';
import {QuestionDtoInterface} from "../../../services/votes/dto/question.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent {
  @Input() issues: QuestionDtoInterface[];

  constructor(private router: Router) {}

  public navigateToIssue(issue_id: number): void {
    this.router.navigate(['issues-list', `${issue_id}`]);
  }
}
