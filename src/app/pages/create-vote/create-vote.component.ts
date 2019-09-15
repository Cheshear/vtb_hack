import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDtoInterface} from "../../services/votes/dto/user.dto";
import * as moment from "moment";
import {VotesServiceStub} from "../../services/votes/stub/votes.service.stub";
import {Router} from "@angular/router";
import {VoteDtoInterface} from "../../services/votes/dto/vote.dto";
import {BaseVoteDtoInterface} from "../../services/votes/dto/base-vote.dto";

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.css']
})
export class CreateVoteComponent implements OnInit {
  public voteForm: FormGroup;
  public questionsForm: FormGroup;
  public votersForm: FormGroup;
  public voters: UserDtoInterface[];

  constructor(private voteService: VotesServiceStub, private router: Router) { }

  public get questionsArray(): FormArray {
    return this.questionsForm.get('questionsArray') as FormArray;
  }

  ngOnInit() {
    this.createVoteForm();
    this.questionsForm = new FormGroup({
      questionsArray: new FormArray([]),
    });
    this.fetchAllVoters();
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
    const questions: string[] = this.questionsArray.value.map((questionFormValue) => questionFormValue['question']);
    const votersFormValue = this.votersForm.getRawValue();
    const voters: BaseVoteDtoInterface[] = Object.keys(votersFormValue)
      .filter((key: string) => votersFormValue[key])
      .map((key: string) => ({id: +key}));

    this.voteService.saveVote$({
      title,
      description,
      deadline: moment(deadline).toISOString(),
      questions,
      voters,
    }).subscribe(
      (vote: VoteDtoInterface) => {
        this.router.navigate(['votes-list', `${vote.id}`]);
      }
    );
  }

  public selectAllVoters(): void {
    this.votersForm.setValue(this.voters.reduce(
      (votersFormData: Record<string, FormControl>, { id }: UserDtoInterface) => {
        return {...votersFormData, [id]: true };
      }, {}));
  }

  public isAnyVoterSelected(): boolean {
    const votersFormValue = this.votersForm.getRawValue();
    return Object.keys(votersFormValue)
      .some((key: string) => votersFormValue[key]);
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
      (votersFormData: Record<string, FormControl>, { id }: UserDtoInterface) => {
        return {...votersFormData, [id]: new FormControl(false) };
      }, {});

    this.votersForm = new FormGroup(voterFormData);
  }

  private fetchAllVoters(): void {
    this.voteService.fetchVoters$().subscribe(
      (voters: UserDtoInterface[]) => {
        this.voters = voters;
        this.createVotersForm();
      });
  }
}
