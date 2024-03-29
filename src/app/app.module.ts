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
  MatStepperModule, MatTableModule, MatCheckboxModule,
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CdkTableModule} from "@angular/cdk/table";
import {appRoutes} from "./app.routes";
import { VotesListComponent } from './components/votes-list/votes-list.component';
import { VoteComponent } from './pages/vote/vote.component';
import { CreateVoteComponent } from './pages/create-vote/create-vote.component';
import { IssuesListComponent } from './pages/vote/issues-list/issues-list.component';
import { IssueComponent } from './pages/vote/issue/issue.component';
import { UsersComponent } from './pages/vote/voters/voters.component';
import {LoginComponent} from "./auth/login/login.component";
import {AuthService} from "./auth/auth.service";
import {BackendService} from "./services/backend/backend.service";
import {VotesService} from "./services/votes/votes.service";
import {VotesServiceStub} from "./services/votes/stub/votes.service.stub";
import { UserNamePipe } from './pipes/user-name/user-name.pipe';
import { DescriptionComponent } from './pages/vote/description/description.component';
import { InvokeFunctionPipe } from './pipes/invoke-function/invoke-function.pipe';
import { VotersListComponent } from './pages/vote/voters-list/voters-list.component';
import { VoutingPopupComponent } from './pages/vote/vouting-popup/vouting-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    VotesListComponent,
    VoteComponent,
    CreateVoteComponent,
    IssuesListComponent,
    IssueComponent,
    LoginComponent,
    UsersComponent,
    UserNamePipe,
    DescriptionComponent,
    InvokeFunctionPipe,
    VotersListComponent,
    VoutingPopupComponent
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
    MatCheckboxModule,
  ],
  providers: [AuthService, BackendService, VotesService, VotesServiceStub],
  entryComponents: [VoutingPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static MomentModule: any;
}
