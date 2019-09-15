import { Component, OnInit } from '@angular/core';
import {VotesService} from "../../services/votes/votes.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {VoterDtoInterface} from "../../services/votes/dto/voter.dto";
import {ShortVoteDtoInterface} from "../../services/votes/dto/short-vote.dto";

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.css']
})
export class CreateVoteComponent implements OnInit {
  public voteForm: FormGroup;
  public questionsForm: FormGroup;
  public votersForm: FormGroup;
  public voters: VoterDtoInterface[];

  constructor(private voteService: VotesService) { }

  public get questionsArray(): FormArray {
    return this.questionsForm.get('questionsArray') as FormArray;
  }

  ngOnInit() {
    this.createVoteForm();
    this.questionsForm = new FormGroup({
      questionsArray: new FormArray([]),
    });
  }

  public addControlToQuestionsForm(): void {
    this.questionsArray.push(new FormGroup(
      {
        question: new FormControl('')
      }
    ));
  }

  public saveData(): void {
    const {title, description, deadline} = this.voteForm.getRawValue();
    const questions: string[] = this.questionsForm.value.map((questionFormValue) => questionFormValue['question']);
    const voters: ShortVoteDtoInterface[] = Object.keys(
      this.votersForm.getRawValue()).map((key: string) => ({id: +key}));

    this.voteService.saveVote$({
      title,
      description,
      deadline,
      questions,
      voters,
    });
  }

  public selectAllVoters(): void {
    this.votersForm.setValue(this.voters.reduce(
      (votersFormData: Record<string, FormControl>, { id }: VoterDtoInterface) => {
        return {...votersFormData, [id]: true };
      }, {}));
  }


  private createVoteForm(): void {
    this.voteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl(null, Validators.required),
    });
  }

  private createVotersForm(): void {
    const voterFormData = this.voters.reduce(
      (votersFormData: Record<string, FormControl>, { id }: VoterDtoInterface) => {
        return {...votersFormData, [id]: new FormControl(false) };
      }, {});

    this.votersForm = new FormGroup(voterFormData);
  }

  private fetchAllVoters(): void {
    this.voteService.fetchVoters$().subscribe(
      (voters: VoterDtoInterface[]) => {
        this.voters = voters;
        this.createVotersForm();
      });
  }
}
