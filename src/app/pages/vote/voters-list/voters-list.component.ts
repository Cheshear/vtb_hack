import {Component, Input, OnInit} from '@angular/core';
import {UserDtoInterface} from "../../../services/votes/dto/user.dto";

@Component({
  selector: 'app-voters-list',
  templateUrl: './voters-list.component.html',
  styleUrls: ['./voters-list.component.css']
})
export class VotersListComponent implements OnInit {

  @Input() voutersList: UserDtoInterface;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
