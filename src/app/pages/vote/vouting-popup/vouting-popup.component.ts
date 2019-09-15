import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {VotesService} from "../../../services/votes/votes.service";

@Component({
  selector: 'app-vouting-popup',
  templateUrl: './vouting-popup.component.html',
  styleUrls: ['./vouting-popup.component.css']
})
export class VoutingPopupComponent {
  public comment = new FormControl('');

  constructor(public dialogRef: MatDialogRef<VoutingPopupComponent>,
              private votesService: VotesService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  public sendVoteResult(voteResult: boolean): void {
    const comment = this.comment.value;
    this.votesService.postAnswer$({answer: voteResult, comment, questionId: +this.data['id']});
  }

}
