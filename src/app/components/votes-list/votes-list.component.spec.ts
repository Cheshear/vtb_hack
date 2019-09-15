import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesListComponent } from './votes-list.component';
import {VotesService} from '../../services/votes/votes.service';

export class Vote {
  id: number;
  name: string;
  creator?: number;
  deadline?: string;
}

describe('VotesListComponent', () => {
  let component: VotesListComponent;
  let fixture: ComponentFixture<VotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

