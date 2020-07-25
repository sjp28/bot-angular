import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { GameLevelComponent } from './game-level/game-level.component';


const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:"submit",component:CandidateInfoComponent},
  {path:"nextlevel",component:GameLevelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
