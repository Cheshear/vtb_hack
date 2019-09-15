import {Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {VotesListComponent} from "./components/votes-list/votes-list.component";
import {VoteComponent} from "./pages/vote/vote.component";
/**
import {CreateVoteComponent} from "./components/create-vote/create-vote.component";*/
import {IssuesListComponent} from "./pages/vote/issues-list/issues-list.component";
import {IssueComponent} from "./pages/vote/issue/issue.component";

export const appRoutes: Routes = [
  {path: "", redirectTo: "votes-list", pathMatch: "full"},
  {path: "sign-in", component: LoginComponent},
  {path: "votes-list", component: VotesListComponent},
  /**
  {path: "create-vote", component: CreateVoteComponent},*/
  {path: "votes-list/:id", component: VoteComponent, children: [
    {path: "", redirectTo: "issues-list", pathMatch: "full"},
    {path: "issues-list", component: IssuesListComponent},
    {path: "issue", component: IssueComponent },
  ]},
];
