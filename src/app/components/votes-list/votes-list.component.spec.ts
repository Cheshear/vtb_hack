import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesListComponent } from './votes-list.component';

export class Vote {
  id: number;
  name: string;
  creator?: number;
  deadline?: string;
}

export const votes: Vote[] = [
  { id: 1, name: 'koko', creator: 123},
  { id: 2, name: 'kiki'},
  { id: 3, name: 'kuku'},
  { id: 4, name: 'kaka'}
];
/**
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
*/
