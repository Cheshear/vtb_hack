import {Component, Input, OnInit} from '@angular/core';
import {VoteDescriptionInterface} from "../models/vote-description.interface";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  @Input() voteDescription: VoteDescriptionInterface;
}
