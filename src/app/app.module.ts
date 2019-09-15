import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule, MatSnackBarModule,
  MatStepperModule, MatTableModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CdkTableModule} from "@angular/cdk/table";
import {appRoutes} from "./app.routes";
import { VotesListComponent } from './components/votes-list/votes-list.component';
import { VoteComponent } from './pages/vote/vote.component';
/**
import { CreateVoteComponent } from './components/create-vote/create-vote.component';
import { DocumentsComponent } from './pages/vote/documents/documents.component';
 */
import { IssuesListComponent } from './pages/vote/issues-list/issues-list.component';
import { IssueComponent } from './pages/vote/issue/issue.component';
import { UsersComponent } from './pages/vote/voters/voters.component';
import {LoginComponent} from "./auth/login/login.component";
import {AuthService} from "./auth/auth.service";
import {BackendService} from "./services/backend/backend.service";
import {VotesService} from "./services/votes/votes.service";


@NgModule({
  declarations: [
    AppComponent,
    VotesListComponent,
    VoteComponent,
    /**CreateVoteComponent,*/
    IssuesListComponent,
    IssueComponent,
   /** DocumentsComponent,*/
    LoginComponent,
    UsersComponent
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [AuthService, BackendService, VotesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static MomentModule: any;
}
